import React from 'react';
import CarouselComponent from '../components/CarouselComponent';
import CardList from '../components/CardList';
import { Container, Box, Grid, Typography, Input } from '@mui/material';
import { StyledButton, StyledButton1, StyledTextField } from '../style';
import { Stack } from '@mui/system';
import CardList2 from '../components/CardList2';
import { CardList3 } from '../components/CardList3';
import { useNavigate } from 'react-router-dom';


function HomeScreen() {
    const navigate = useNavigate()
    return (
        <div style={{ overflowX: "hidden" }}>
            <Box mt={0}>
                <CarouselComponent />
            </Box>
            <div className='container'>
                <Grid container
                    direction="column"
                    justifyContent="center"
                    alignItems="center" sx={{ marginTop: "3vh" }}>

                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center">

                        <Grid item >
                            <Input id="filled-basic" placeholder="Search for product" variant="filled" sx={{ width: 600, borderTop: '1px solid grey', borderLeft: '1px solid grey', borderRight: '1px solid grey', padding: '5px', marginRight: '10px' }}></Input>
                        </Grid>

                        <Grid item >
                            <StyledButton1 onClick={() => { navigate('/search') }}>Search</StyledButton1>
                        </Grid>
                        <Box mt={1}>
                            <CardList />
                        </Box>

                    </Grid>

                    <div style={{ margin: "50px 0" }}>
                        <Grid container alignItems='center' justifyContent='space-between' style={{ height: '10vh' }}>
                            <Grid item >
                                <img src="https://indiajewelleryhub.com/assets/images/patterns/pattern7-left.png" alt="" style={{ width: '20vw', height: 'fit-content' }} />
                            </Grid>
                            <Grid item><Typography variant='h3' style={{ overflowY: 'hidden', fontWeight: 800, color: '#3f4042' }}>Featured Members</Typography></Grid>
                            <Grid item>
                                <img src="https://indiajewelleryhub.com/assets/images/patterns/pattern7-left.png" alt="" style={{ width: '20vw', height: 'fit-content' }} />
                            </Grid>
                        </Grid>
                    </div>
                    <CardList2 />

                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', margin: '5vh 0' }}>
                        <img style={{ height: '30px', marginRight: '-5px' }} src="https://indiajewelleryhub.com/assets/images/star.png" alt="" />
                        <div style={{
                            position: 'relative',
                            height: '3px',
                            width: '100%',
                            background: '#a59a5e',
                            margin: '20px 0 20px 0'
                        }}>
                        </div>
                        <img style={{ height: '30px', marginLeft: '-5px' }} src="https://indiajewelleryhub.com/assets/images/star.png" alt="" />
                    </div>

                    <CardList3 />
                </Grid>
            </div>
        </div >
    );
}

export default HomeScreen;
