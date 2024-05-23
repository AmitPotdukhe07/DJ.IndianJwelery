import React from 'react';
import { AppBar, Toolbar, Typography, Button, styled } from '@mui/material';
import { StyledButton } from '../style';

const Header = () => {
    const StyleToolBar = styled(Toolbar)(({ theme }) => ({
        color: 'white'
    }))
    return (
        <AppBar position="sticky" color='headerColor' >
            <StyleToolBar color="headerColor" className='container'>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <img src="https://indiajewelleryhub.com/assets/images/logo.png" alt="" style={{ height: '50px' }} />
                </Typography>
                <StyledButton color="headerColor">Login</StyledButton>
            </StyleToolBar>
        </AppBar>
    );
};

export default Header;
