import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 460px;
  padding: 28px 0 36px;

  /* gap: 20px; */

  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const LogoImage = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const BackgroundImage = styled.img`
  margin: 0 auto;
`;

export const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 8px;
  margin: 18px 0 62px 0;

  background-color: rgb(235, 216, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 3px,
    rgb(174, 123, 227) 0px -2px 3px inset, rgb(251, 248, 255) 0px 3px 3px inset;
`;

export const ThumbAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: rgb(235, 216, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px,
    rgb(174, 123, 227) 0px -2px 4px inset, rgb(251, 248, 255) 0px 4px 3px inset;
  border-radius: 50%;
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  overflow: hidden;
`;

export const ThumbInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 26px;
`;
