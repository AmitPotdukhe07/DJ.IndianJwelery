import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, TextField, MenuItem, Select, InputLabel, FormControl, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledDialogContent = styled(DialogContent)({
    padding: '20px',
    textAlign: 'center',
});

const StyledFormControl = styled(FormControl)({
    marginBottom: '20px',
    minWidth: 120,
    width: '100%',
});

const StyledButton1 = styled(Button)({
    marginTop: '20px',
    backgroundColor: '#BDB76B',
    color: 'white',
});

const StyledLink = styled(Typography)({
    marginTop: '10px',
    cursor: 'pointer',
    color: 'purple',
});

const AuthModal = () => {
    const [openRegister, setOpenRegister] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const handleOpenRegister = () => setOpenRegister(true);
    const handleCloseRegister = () => setOpenRegister(false);

    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseLogin = () => setOpenLogin(false);

    return (
        <Box>
            {/* Buttons to open modals */}
            <Button variant="contained" onClick={handleOpenRegister}>Create Account</Button>
            <Button variant="contained" onClick={handleOpenLogin}>Login</Button>

            {/* Registration Modal */}
            <Dialog open={openRegister} onClose={handleCloseRegister}>
                <DialogTitle>Create account</DialogTitle>
                <StyledDialogContent>
                    <TextField fullWidth margin="normal" label="Enter Name" variant="outlined" />
                    <TextField fullWidth margin="normal" label="Enter Email ID" variant="outlined" />
                    <TextField fullWidth margin="normal" label="Enter Password" type="password" variant="outlined" />
                    <TextField fullWidth margin="normal" label="Confirm Password" type="password" variant="outlined" />
                    <TextField fullWidth margin="normal" label="Enter Company Name" variant="outlined" />
                    <TextField fullWidth margin="normal" label="Enter Designation" variant="outlined" />
                    <StyledFormControl variant="outlined">
                        <InputLabel>Select Nature Of Business</InputLabel>
                        <Select label="Select Nature Of Business">
                            <MenuItem value={1}>Business Type 1</MenuItem>
                            <MenuItem value={2}>Business Type 2</MenuItem>
                        </Select>
                    </StyledFormControl>
                    <TextField fullWidth margin="normal" label="Enter City" variant="outlined" />
                    <StyledFormControl variant="outlined">
                        <InputLabel>Select Country</InputLabel>
                        <Select label="Select Country">
                            <MenuItem value={1}>Country 1</MenuItem>
                            <MenuItem value={2}>Country 2</MenuItem>
                        </Select>
                    </StyledFormControl>
                    <StyledButton1 fullWidth onClick={handleCloseRegister}>Create Account</StyledButton1>
                    <StyledLink onClick={() => { handleCloseRegister(); handleOpenLogin(); }}>Already signed up? Login here.</StyledLink>
                </StyledDialogContent>
            </Dialog>

            {/* Login Modal */}
            <Dialog open={openLogin} onClose={handleCloseLogin}>
                <DialogTitle>Login to your account</DialogTitle>
                <StyledDialogContent>
                    <TextField fullWidth margin="normal" label="Enter Email ID" variant="outlined" />
                    <TextField fullWidth margin="normal" label="Enter Password" type="password" variant="outlined" />
                    <StyledButton1 fullWidth onClick={handleCloseLogin}>Login</StyledButton1>
                    <StyledLink onClick={() => { handleCloseLogin(); handleOpenRegister(); }}>New User? Register here.</StyledLink>
                </StyledDialogContent>
            </Dialog>
        </Box>
    );
}

export default AuthModal;
