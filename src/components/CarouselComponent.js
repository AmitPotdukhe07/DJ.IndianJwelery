import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Grid, Typography, styled } from '@mui/material';

const CarouselComponent = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const StyledTypography = styled(Typography)(({ theme }) => ({
        color: 'white',
        fontWeight: 900,
        fontFamily: 'k22_didoniregular',
    }))

    return (
        <Slider {...settings} sx={{ overflowY: 'hidden', }}>
            <Grid container spacing={2} justifyContent="center"
                alignItems="center">
                <Box sx={{
                    backgroundImage: 'url("https://indiajewelleryhub.com/assets/images/banner/banner1.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '50vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflowY: 'hidden',
                    width: 'auto',
                    color: 'white',
                }}>

                    <Grid item xs={6}>
                        <Typography className='heading-text' variant="h2" align="center">
                            BESPOKE JEWELLERY.
                        </Typography>
                        <br />
                        <Typography className='heading-text' variant="h2" align="center">
                            CRAFTED IN INDIA.
                        </Typography>
                        <br />
                        <Typography className='heading-text' variant="h2" align="center">
                            IMAGINED BY YOU.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                </Box>
            </Grid>
            <Grid container spacing={2} justifyContent="center"
                alignItems="center">

                <Box sx={{
                    backgroundImage: 'url("https://indiajewelleryhub.com/assets/images/banner/banner2.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '50vh',
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflowY: 'hidden',
                    color: 'white',
                }}>
                    <Grid item xs={6}>
                        <Typography variant="h2" align="center">
                            BESPOKE JEWELLERY.
                        </Typography>
                        <br />
                        <Typography variant="h2" align="center">
                            CRAFTED IN INDIA.
                        </Typography>
                        <br />
                        <Typography variant="h2" align="center">
                            IMAGINED BY YOU.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>


                </Box>
            </Grid >

            <Grid container spacing={2} justifyContent="center"
                alignItems="center">
                <Box sx={{
                    backgroundImage: 'url("https://indiajewelleryhub.com/assets/images/banner/newbanner2.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '50vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflowY: 'hidden',
                    width: '100%',
                    color: 'white',
                }}>
                    <Grid item xs={6}>
                        <Typography variant="h2" align="center">
                            BESPOKE JEWELLERY.
                        </Typography>
                        <br />
                        <Typography variant="h2" align="center">
                            CRAFTED IN INDIA.
                        </Typography>
                        <br />
                        <Typography variant="h2" align="center">
                            IMAGINED BY YOU.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                </Box>
            </Grid>
        </Slider >
    );
};

export default CarouselComponent;
