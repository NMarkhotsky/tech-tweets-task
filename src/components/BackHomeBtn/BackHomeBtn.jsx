import { MdArrowBackIos } from 'react-icons/md';
import { Link } from './BackHomeBtn.styled';

export const BackHomeBtn = () => {
  return (
    <Link to="/">
      <MdArrowBackIos />
      <span>Back</span>
    </Link>
  );
};
