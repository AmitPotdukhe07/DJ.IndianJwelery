import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "10vh",
                color: 'white',
                backgroundColor: "#1a1a1a",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                overflowY: 'hidden'
            }}
        >
            <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Grid item>
                    <img src="https://indiajewelleryhub.com/assets/images/patterns/pattern6-left.png" alt="" style={{ height: '10vh', width: '11vw' }} />
                </Grid>
                <Grid item direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="white" variant="h5">
                            React Starter App
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="white" variant="subtitle1">
                            {`${new Date().getFullYear()} | React | Material UI | React Router`}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <img src="https://indiajewelleryhub.com/assets/images/patterns/pattern6-left.png" alt="" style={{ height: '10vh', width: '11vw' }} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;