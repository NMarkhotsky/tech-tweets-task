import { Button } from './LoadMoreBtn.styled';

/* eslint-disable react/prop-types */
export const LoadMoreBtn = ({ handleBtnLoadMore, disabled }) => {
  return (
    <Button
      type="button"
      disabled={disabled}
      onClick={() => handleBtnLoadMore()}
    >
      {disabled ? 'Load More...' : 'Load More'}
    </Button>
  );
};
