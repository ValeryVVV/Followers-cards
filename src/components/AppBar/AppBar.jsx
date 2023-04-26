// import { AuthNav } from 'components/AuthNav/AuthNav';

// import { Navigation } from "components/Navigation/Navigation";
// import { UserMenu } from 'components/UserMenu/UserMenu';
// import { useSelector } from 'react-redux';
// import { getIsLoggedIn } from 'redux/auth/auth-selectors';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CottageIcon from '@mui/icons-material/Cottage';
import { Navigation } from 'components/Navigation/Navigation';
import { NavLink } from 'react-router-dom';

export const AppBarContainer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <NavLink to="/">
                <CottageIcon fontSize='medium' />
            </NavLink>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Navigation />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
