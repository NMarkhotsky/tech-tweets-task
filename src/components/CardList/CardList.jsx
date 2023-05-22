import PropTypes from 'prop-types';
import { CardItem } from '../CardItem/CardItem';
import { List } from './CardList.styled';

export const CardList = ({ users, onClick }) => {
  return (
    <List>
      {users.map(user => (
        <CardItem key={user.id} {...user} onClick={onClick} />
      ))}
    </List>
  );
};

CardList.propTypes = {
  users: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
