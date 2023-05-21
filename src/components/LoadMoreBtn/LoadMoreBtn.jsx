import PropTypes from 'prop-types';
import { Button } from './LoadMoreBtn.styled';

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

LoadMoreBtn.propTypes = {
  handleBtnLoadMore: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
