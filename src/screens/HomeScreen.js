import React from 'react';
import CarouselComponent from '../components/CarouselComponent';
import CardList from '../components/CardList';
import { Container, Box, Grid, Typography } from '@mui/material';
import { StyledButton, StyledTextField } from '../style';
import { Stack } from '@mui/system';
import CardList2 from '../components/CardList2';
import { CardList3 } from '../components/CardList3';

function HomeScreen() {
    return (
        <div>
            <Box mt={0}>
                <CarouselComponent />
            </Box>
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center" sx={{ marginTop: "10px" }}>
                <Grid container direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Stack direction="row">
                        <StyledTextField sx={{ width: 600, height: 50 }} label="Search for product"></StyledTextField>
                        <StyledButton>Search</StyledButton>
                    </Stack>
                    <Box mt={1}>
                        <CardList />
                    </Box>
                </Grid>
                <Container sx={{ m: 2 }}>
                    <Grid container alignItems='center' justifyContent='space-between'>
                        <Grid item>
                            <img src="https://indiajewelleryhub.com/assets/images/patterns/pattern7-left.png" alt="" style={{ width: '20vw' }} />
                        </Grid>
                        <Grid item><Typography variant='h4' style={{ overflowY: 'hidden' }}>Featured Members</Typography></Grid>
                        <Grid item>
                            <img src="https://indiajewelleryhub.com/assets/images/patterns/pattern7-left.png" alt="" style={{ width: '20vw' }} />
                        </Grid>
                    </Grid>
                </Container>
                <CardList2 />

                <Container style={{
                    position: 'relative',
                    height: '1px',
                    width: '100%',
                    background: '#a59a5e',
                    margin: '20px 0 20px 0'
                }}></Container>

                <CardList3 />
            </Grid>
        </div>
    );
}

export default HomeScreen;
