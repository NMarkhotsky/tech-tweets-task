import { useEffect } from 'react';
import { useState } from 'react';
import { getTweets } from '../../services/api';
import { CardItem } from '../CardItem/CardItem';
import { List } from './CardList.styled';

export const CardList = () => {
  const [users, setUsers] = useState([]);
  console.log('users: ', users);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getTweets();
      setUsers([...data]);
    };

    getData();
  }, []);

  return (
    <List>
      {users.map(user => (
        <CardItem key={user.id} {...user} />
      ))}
    </List>
  );
};
