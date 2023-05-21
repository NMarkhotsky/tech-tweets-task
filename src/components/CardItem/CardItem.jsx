import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import background from '../../assets/background.png';
import {
  Item,
  ThumbAvatar,
  LogoImage,
  BackgroundImage,
  AvatarImage,
  Thumb,
  ThumbInfo,
  Button,
} from './CardItem.styled';

export const CardItem = ({
  id,
  avatar,
  followers,
  following,
  tweets,
  user,
  onClick,
}) => {
  return (
    <Item>
      <LogoImage src={logo} alt="logo" loading="lazy" />
      <BackgroundImage src={background} alt="Background" loading="lazy" />

      <Thumb>
        <ThumbAvatar>
          <AvatarImage
            src={avatar}
            alt={user}
            width={62}
            height={62}
            loading="lazy"
          />
        </ThumbAvatar>
      </Thumb>
      <ThumbInfo>
        <p>{user}</p>
        <p>{tweets} TWEETS</p>
        <p>{followers.toLocaleString('en-US')} FOLLOWERS</p>
      </ThumbInfo>
      <Button
        type="button"
        value={following}
        onClick={() => onClick(id, following)}
      >
        {following ? 'Follow' : 'Following'}
      </Button>
    </Item>
  );
};

CardItem.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.bool.isRequired,
  tweets: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
