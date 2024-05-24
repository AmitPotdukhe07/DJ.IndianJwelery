import React, { useCallback, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./ProductDetail.css";
import customAxios from "../authAxios";
import { Button, Dialog, DialogContent, DialogTitle, TextField, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Swal from "sweetalert2";

const StyledDialogContent = styled(DialogContent)({
    padding: '20px',
    textAlign: 'center',
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

const LoginForm = React.memo(({ open, handleClose, email, setEmail, handleSubmit }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Write your enquiry here</DialogTitle>
            <StyledDialogContent>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Enter Enquiry"
                    variant="outlined"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <Button fullWidth onClick={() => handleSubmit(email)}>Send Enquiry</Button>
            </StyledDialogContent>
        </Dialog>
    );
});

export default function ProductScreen() {
    const [openLogin, setOpenLogin] = useState(false);
    const [results, setResults] = useState({});
    const [email, setEmail] = useState('');
    const { id } = useParams();

    const handleOpenLogin = useCallback(() => setOpenLogin(true), []);
    const handleCloseLogin = useCallback(() => setOpenLogin(false), []);

    useEffect(() => {
        customAxios.get(`/api/v1/product/${id}`)
            .then((response) => {
                if (response.data.success) {
                    setResults(response.data.results);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleSubmit = (email) => {
        console.log('Enquiry:', email);

        try {
            customAxios.post("/api/v1/send-enquiry", { enquiry: email })
                .then((response) => {
                    console.log(response);
                    if (response.data.success) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Enquiry send successfully",
                            showConfirmButton: false,
                            timer: 2000,
                        }).then(() => {

                        });
                        setOpenLogin(false);
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

    };

    return (
        <div style={{ overflowX: 'hidden' }}>
            <LoginForm
                open={openLogin}
                handleClose={handleCloseLogin}
                email={email}
                setEmail={setEmail}
                handleSubmit={handleSubmit}
            />
            <div className="productImg">
                <img
                    style={{ width: "100vw", height: "60vh", objectFit: "cover" }}
                    src={results.bgImage}
                    alt=""
                />
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 4fr",
                    padding: "10vh",
                }}
            >
                <div style={{ position: "relative" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "5%",
                            position: "absolute",
                            top: "-70px",
                            overflow: "visible !important",
                        }}
                    >
                        <img
                            src={results.frontImage}
                            style={{
                                height: "200px",
                                width: "200px",
                                boxShadow: "1px 1px 10px black",
                                zIndex: 2,
                            }}
                            alt=""
                        />
                        <img
                            src="https://indiajewelleryhub.com/assets/images/patterns/pattern5.png"
                            style={{ height: "auto", width: "200px" }}
                            alt=""
                        />
                    </div>
                </div>

                <div>
                    <h2 style={{ fontWeight: "800", margin: "16px 0 " }}>
                        {results.name}
                    </h2>
                    <h1 style={{ fontWeight: "100", margin: "8px 0" }}>EST 1971</h1>
                    <div style={{ margin: "10px 0" }}>
                        <span>Head Office:</span>
                        <span style={{ color: "gray" }}>{results.location}</span>
                    </div>
                    <div style={{ margin: "10px 0" }}>
                        <span>Factory Locations:</span>
                        <span style={{ color: "gray" }}>{results.location}</span>
                    </div>
                    <div style={{ margin: "10px 0" }}>
                        <span>Foreign Offices:</span>
                        <span style={{ color: "gray" }}>MUMBAI(IN)</span>
                    </div>
                    <div style={{ margin: "10px 0" }}>
                        <span>Export Markets:</span>
                        <span style={{ color: "gray" }}>{results.exportMarkets}</span>
                    </div>
                    <div style={{ margin: "10px 0" }}>
                        <span>Certifications:</span>
                        <span style={{ color: "gray" }}>NA</span>
                    </div>
                    <div style={{ margin: "10px 0" }}>
                        <span>Products:</span>
                        <span style={{ color: "gray" }}>{results.products}</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', margin: '5vh 0' }}>
                        <img style={{ height: '20px', marginRight: '-5px' }} src="https://indiajewelleryhub.com/assets/images/star.png" alt="" />
                        <div style={{
                            height: '2px',
                            width: '100%',
                            background: '#a59a5e',
                            margin: '20px 0 20px 0'
                        }}>
                        </div>
                        <img style={{ height: '20px', marginLeft: '-5px' }} src="https://indiajewelleryhub.com/assets/images/star.png" alt="" />
                    </div>

                    <button style={{ background: "#a59a5e", padding: "25px 35px", border: "none", color: "white" }} onClick={handleOpenLogin}>SEND ENQUIRY</button>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', margin: '5vh 0' }}>
                        <img style={{ height: '20px', marginRight: '-5px' }} src="https://indiajewelleryhub.com/assets/images/star.png" alt="" />
                        <div style={{
                            height: '2px',
                            width: '100%',
                            background: '#a59a5e',
                            margin: '20px 0 20px 0'
                        }}>
                        </div>
                        <img style={{ height: '20px', marginLeft: '-5px' }} src="https://indiajewelleryhub.com/assets/images/star.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
