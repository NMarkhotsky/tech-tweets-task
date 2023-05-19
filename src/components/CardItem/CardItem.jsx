/* eslint-disable react/prop-types */
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
import logo from '../../assets/logo.png';
import background from '../../assets/background.png';

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
        {/* <p>{user}</p> */}
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
