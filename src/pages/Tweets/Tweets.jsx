import { useState, useCallback, useEffect, useMemo } from 'react';
import { getTweets, updateTweets } from '../../services/api';
import { CardList } from '../../components/CardList/CardList';
import { CardFilter } from '../../components/CardFilter/CardFilter';
import { LoadMoreBtn } from '../../components/LoadMoreBtn/LoadMoreBtn';
import { LinkToBack } from '../../components/LinkToBack/LinkToBack';
import { scrollOnLoadMore } from '../../utils/scrollOnLoadMore';
import { all, follow, followings } from '../../utils/constants';
import { Main, Section } from './Tweets.styled';

function Tweets() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const { data } = await getTweets();

        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const handleFollowing = useCallback((id, following) => {
    try {
      setUsers(prevUsers =>
        prevUsers.map(user => {
          if (user.id === id) {
            const updatedFollowers = following
              ? user.followers + 1
              : user.followers - 1;

            const updatedUser = {
              ...user,
              followers: updatedFollowers,
              following: !user.following,
            };

            updateTweets(id, updatedFollowers, updatedUser.following);

            return updatedUser;
          }
          return user;
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleFilterChange = useCallback(filterValue => {
    setFilter(filterValue);
  }, []);

  const filteredUsers = useMemo(() => {
    let filtered = users;

    switch (filter) {
      case all:
        break;

      case follow:
        filtered = filtered.filter(user => !user.following);
        break;

      case followings:
        filtered = filtered.filter(user => user.following);
        break;

      default:
        break;
    }

    const endIndex = page * 3;
    setShowLoadMore(endIndex);
    return filtered.slice(0, endIndex);
  }, [filter, page, users]);

  const handleBtnLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    scrollOnLoadMore();
  };

  const isLoadMoreVisible = showLoadMore === filteredUsers.length;

  return (
    <Main>
      <Section>
        <LinkToBack />
        <CardFilter
          handleFilterChange={handleFilterChange}
          resetPage={setPage}
        />
      </Section>
      <section>
        <CardList users={filteredUsers} onClick={handleFollowing} />
        {isLoadMoreVisible && (
          <LoadMoreBtn
            handleBtnLoadMore={handleBtnLoadMore}
            disabled={isLoading}
          />
        )}
      </section>
    </Main>
  );
}

export default Tweets;
