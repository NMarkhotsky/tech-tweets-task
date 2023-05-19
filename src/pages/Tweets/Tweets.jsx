import { useState, useCallback, useEffect, useMemo } from 'react';
import { getTweets, updateTweets } from '../../services/api';
import { CardList } from '../../components/CardList/CardList';
import { CardFilter } from '../../components/CardFilter/CardFilter';
import { LoadMoreBtn } from '../../components/LoadMoreBtn/LoadMoreBtn';
import { BackHomeBtn } from '../../components/BackHomeBtn/BackHomeBtn';
import { Section } from './Tweets.styled';
import { scrollOnLoadMore } from '../../utils/scrollOnLoadMore';

function Tweets() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('All');
  const [showLoadMore, setShowLoadMore] = useState(false);
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
              ? user.followers - 1
              : user.followers + 1;

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
      case 'All':
        break;

      case 'Follow':
        filtered = filtered.filter(user => !user.following);
        break;

      case 'Followings':
        filtered = filtered.filter(user => user.following);
        break;

      default:
        filtered;
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
    <main>
      <Section>
        <BackHomeBtn />
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
    </main>
  );
}

export default Tweets;
