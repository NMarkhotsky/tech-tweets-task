import {
  Item,
  ThumbAvatar,
  LogoImage,
  BackgroundImage,
  AvatarImage,
  Thumb,
  ThumbInfo,
} from './CardItem.styled';
import logo from '../../assets/logo.png';
import background from '../../assets/background.png';
import { CardButton } from '../CardButton/CardButton';

// eslint-disable-next-line react/prop-types
export const CardItem = ({ avatar, followers, isFollowing, tweets, user }) => {
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
        <p>{followers} FOLLOWERS</p>
      </ThumbInfo>
      <CardButton isFollowing={isFollowing} />
    </Item>
  );
};
