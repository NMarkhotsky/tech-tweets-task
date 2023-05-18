import { Button } from './CardButton.styled';

// eslint-disable-next-line react/prop-types
export const CardButton = ({ isFollowing }) => {
  return (
    <Button type="button" value={isFollowing}>
      {isFollowing ? 'Follow' : 'Following'}
    </Button>
  );
};
