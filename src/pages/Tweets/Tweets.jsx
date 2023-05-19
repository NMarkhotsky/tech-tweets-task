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
  // const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      setIsLoading(true);
      try {
        const { data } = await getTweets(page, abortController);

        setUsers(prevUsers => [...prevUsers, ...data]);
        setIsLoading(false);
        scrollOnLoadMore();
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    getData();
    return () => {
      abortController.abort();
    };
  }, [page]);

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
    switch (filter) {
      case 'All':
        return users;

      case 'Follow':
        return users.filter(user => !user.following);

      case 'Followings':
        return users.filter(user => user.following);

      default:
        return users;
    }
  }, [filter, users]);

  const handleBtnLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <main>
      <Section>
        <BackHomeBtn />
        <CardFilter handleFilterChange={handleFilterChange} />
      </Section>
      <section>
        <CardList users={filteredUsers} onClick={handleFollowing} />
        {users.length < 12 && (
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
