import React from 'react';
import { AppBar, Toolbar, Typography, Button, styled } from '@mui/material';
import { StyledButton } from '../style';

const Header = () => {
    const StyleToolBar = styled(Toolbar)(({ theme }) => ({
        color: 'white'
    }))
    return (
        <AppBar position="sticky" color='headerColor'>
            <StyleToolBar color="headerColor">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    GJEPC
                </Typography>
                <StyledButton color="headerColor">Login</StyledButton>
            </StyleToolBar>
        </AppBar>
    );
};

export default Header;
