import picture from '../picture/picture1.png';
import rectangle from '../picture/rectangle1.png';
import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';

export const Container = styled(`div`)({
  display: 'flex',
  justifyContent: 'space-around',
  gap: '32px',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const Wrapper = styled('div')({
  position: 'relative',
  width: '380px',
  height: '460px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '23px',
  paddingBottom: '30px',
  background: `linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    )`,
  borderRadius: '20px',
  boxShadow: '10px 10px 5px 0px rgba(0, 0, 0, 0.75)',
});

export const Image = styled('div')({
  width: '308px',
  height: '168px',
  backgroundImage: `url(${picture})`,
});

export const RectangleImage = styled('div')({
  width: '100%',
  height: '8px',
  marginTop: '18px',
  backgroundImage: `url(${rectangle})`,
});

export const Boy = styled('div')({
  position: 'absolute',
  top: '175px',
  left: '150px',
  width: '85.9232px',
  height: '80px',
  borderRadius: '85.9232px',
  padding: '9px 10px 10px 14px',
  overflow: 'hidden',
});

export const TextContainer = styled('div')({
  marginTop: '50px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const StyledText = styled(Typography)({
  height: '24px',
  width: 'fit-content',
  margin: '0',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '24px',
  color: '#ebd8ff',
  textTransform: 'uppercase',
});

export const StyledFollowButton = styled(Button)({
  marginTop: '20px',
  width: '196px',
  height: '50px',
  borderRadius: '10.3108px',
  boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
  background: '#ebd8ff',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '18px',
  lineHeight: '22px',
  textTransform: 'uppercase',
  color: '#373737',
  cursor: 'pointer',

  '&:hover': {
    color: '#f36429',
    scale: '1.2',
  },
});

export const StyledFollowingButton = styled(Button)({
  marginTop: '20px',
  width: '196px',
  height: '50px',
  borderRadius: '10.3108px',
  boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
  background: '#5cd3a8',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '18px',
  lineHeight: '22px',
  textTransform: 'uppercase',
  color: '#373737',
  cursor: 'pointer',

  '&:hover': {
    color: '#f36429',
    scale: '1.2',
  },
});

export const Avatar = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '66px',
});
