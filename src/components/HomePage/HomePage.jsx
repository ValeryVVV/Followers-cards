import { Button, Typography } from "@mui/material";
import { styled } from '@mui/system';
import { useNavigate } from "react-router-dom";

export const Container = styled('div')({
    display: 'flex',
    marginTop: '100px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px'
});

export const StyledButton = styled(Button)({
    width: '150px',
    color: '#e69c14',
    borderColor: '#e69c14'
});
  
  export default function Home() {

    const navigate = useNavigate();
    return (
      <Container>
        <Typography variant="h3">Tweets User Cards</Typography>
        <Typography variant="h6">Welcome to interactive user cards!</Typography>
        <StyledButton onClick={() => navigate("/tweets")} variant="outlined">Try it now!</StyledButton>
      </Container>
    );
  }
