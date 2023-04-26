import { Container } from "components/Card/CardStyle";

import users from '../../data/data.json';
import { Card } from "components/Card/Card";
import { styled } from '@mui/system';
import { NavLink } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from "@mui/material";


export const StyledLink = styled(NavLink)({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '5px',
    textDecoration: 'none',
    padding: '12px',
    fontWeight: '700',
    marginTop: '20px'
});

export const CardList = () => {
  return (
    <>
    <Box>
        <StyledLink to="/">
        <ArrowBackIcon fontSize='medium' />
            Back
        </StyledLink>
        </Box>
      <Container sx={{mt: 3}}>
            {users.map(({ id, tweets, followers, avatar }) => (
                <Card
                    key={id}
                    tweets={tweets}
                    followers={followers}
                    avatar={avatar}
                    id={id} 
                />
            ))}
        </Container>
    </>
  );
};