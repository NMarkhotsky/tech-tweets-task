import { MdArrowBackIos } from 'react-icons/md';
import { Link } from './LinkToBack.styled';

export const LinkToBack = () => {
  return (
    <Link to="/">
      <MdArrowBackIos />
      <span>Back</span>
    </Link>
  );
};
