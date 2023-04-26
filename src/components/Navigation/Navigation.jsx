import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';

export const StyledLink = styled(NavLink)({
    display: 'inline-block',
    textDecoration: 'none',
    padding: '12px',
    fontWeight: '700',
    color: '#ffff'
});

export const Navigation = () => {

  return (
    <nav>
      <StyledLink to="/">
        Home
      </StyledLink>
      <StyledLink to="/tweets">
        Tweets
      </StyledLink>
    </nav>
  );
};