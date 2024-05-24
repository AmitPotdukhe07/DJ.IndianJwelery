import React, { useState, useCallback } from 'react';
import { AppBar, Toolbar, Typography, Button, styled, Box, Dialog, DialogContent, DialogTitle, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { StyledButton } from '../style';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from '../authAxios';

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

const StyleToolBar = styled(Toolbar)(({ theme }) => ({
    color: 'white'
}));

const RegisterForm = React.memo(({ open, handleClose, handleOpenLogin }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [company, setCompany] = useState("");
    const [designation, setDesignation] = useState("");
    const [city, setCity] = useState("");

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create account</DialogTitle>
            <StyledDialogContent>
                <TextField fullWidth margin="normal" label="Enter Name" variant="outlined" value={name}
                    onChange={(event) => {
                        event.preventDefault()
                        setName(event.target.value);
                    }} />
                <TextField fullWidth margin="normal" label="Enter Email ID" variant="outlined" value={email}
                    onChange={(event) => {
                        event.preventDefault()
                        setEmail(event.target.value);
                    }} />
                <TextField fullWidth margin="normal" label="Enter Password" type="password" variant="outlined" value={password}
                    onChange={(event) => {
                        event.preventDefault()
                        setPassword(event.target.value);
                    }} />
                <TextField fullWidth margin="normal" label="Confirm Password" type="password" variant="outlined" />
                <TextField fullWidth margin="normal" label="Enter Company Name" variant="outlined" value={company}
                    onChange={(event) => {
                        event.preventDefault()
                        setCompany(event.target.value);
                    }} />
                <TextField fullWidth margin="normal" label="Enter Designation" variant="outlined" value={designation}
                    onChange={(event) => {
                        event.preventDefault()
                        setDesignation(event.target.value);
                    }} />
                <StyledFormControl variant="outlined">
                    <InputLabel>Select Nature Of Business</InputLabel>
                    <Select label="Select Nature Of Business">
                        <MenuItem value={1}>Business Type 1</MenuItem>
                        <MenuItem value={2}>Business Type 2</MenuItem>
                    </Select>
                </StyledFormControl>
                <TextField fullWidth margin="normal" label="Enter City" variant="outlined" value={city}
                    onChange={(event) => {
                        event.preventDefault()
                        setCity(event.target.value);
                    }} />
                <StyledFormControl variant="outlined">
                    <InputLabel>Select Country</InputLabel>
                    <Select label="Select Country">
                        <MenuItem value={1}>Country 1</MenuItem>
                        <MenuItem value={2}>Country 2</MenuItem>
                    </Select>
                </StyledFormControl>
                <StyledButton1 fullWidth onClick={handleClose}>Create Account</StyledButton1>
                <StyledLink onClick={() => { handleClose(); handleOpenLogin(); }}>Already signed up? Login here.</StyledLink>
            </StyledDialogContent>
        </Dialog>
    );
});

const LoginForm = React.memo(({ open, handleClose, handleOpenRegister, email, setEmail, password, setPassword, handleLoginClick }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Login to your account</DialogTitle>
            <StyledDialogContent>
                <TextField fullWidth margin="normal" label="Enter Email" variant="outlined" value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }} />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Enter Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
                <StyledButton fullWidth onClick={handleLoginClick}>Login</StyledButton>
                <StyledLink onClick={() => { handleClose(); handleOpenRegister(); }}>New User? Register here.</StyledLink>
            </StyledDialogContent>
        </Dialog>
    );
});

const Header = () => {
    const navigate = useNavigate();
    const [openRegister, setOpenRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    const [openLogin, setOpenLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOpenRegister = useCallback(() => setOpenRegister(true), []);
    const handleCloseRegister = useCallback(() => setOpenRegister(false), []);

    const handleOpenLogin = useCallback(() => setOpenLogin(true), []);
    const handleCloseLogin = useCallback(() => setOpenLogin(false), []);

    const handleLoginClick = useCallback(() => {
        console.log("login clicked");
        if (email === "" || password === "") {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Fill input fields",
                showConfirmButton: false,
                timer: 2000,
            });
            return;
        }
        try {
            axios.post("/api/v1/user/signin", { email, password: password })
                .then((response) => {
                    console.log(response);
                    if (response.data.success) {
                        Cookies.set("auth", response.data.token, { expires: 7 });
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Login",
                            showConfirmButton: false,
                            timer: 2000,
                        }).then(() => {
                            navigate("/search");
                        });
                        setOpenLogin(false);
                        setShowLogin(false);
                        return;
                    } else {
                        console.log("in else login");
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: "Login failed",
                            showConfirmButton: false,
                            timer: 2000,
                        });
                    }
                })
                .catch((err) => {
                    console.log("in el ");
                    setOpenLogin(false);
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Login failed",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                });
        } catch (error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: error,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }, [email, password, navigate]);

    return (
        <AppBar position="sticky" color='headerColor'>
            <StyleToolBar color="headerColor" className='container'>
                <Box>
                    <RegisterForm
                        open={openRegister}
                        handleClose={handleCloseRegister}
                        handleOpenLogin={handleOpenLogin}
                    />
                    <LoginForm
                        open={openLogin}
                        handleClose={handleCloseLogin}
                        handleOpenRegister={handleOpenRegister}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleLoginClick={handleLoginClick}
                    />
                </Box>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <img src="https://indiajewelleryhub.com/assets/images/logo.png" alt="" style={{ height: '50px' }} />
                </Typography>
                {
                    showLogin && <StyledButton color="headerColor" onClick={handleOpenLogin}>Login</StyledButton>
                }
            </StyleToolBar>
        </AppBar>
    );
};

export default Header;
