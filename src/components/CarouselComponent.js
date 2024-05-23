import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';

const CarouselComponent = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} sx={{ overflowY: 'hidden', }}>
            <Box sx={{
                backgroundImage: 'url("https://indiajewelleryhub.com/assets/images/banner/banner1.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '50vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflowY: 'hidden',
                width: '100%',
                color: 'white', // adjust text color if needed
            }}>
                <Typography variant="h4" align="center" sx={{ overflowY: 'hidden' }}>
                    BESPOKE JEWELLERY. CRAFTED IN INDIA. IMAGINED BY YOU.
                </Typography>
            </Box>
            <Box sx={{
                backgroundImage: 'url("https://indiajewelleryhub.com/assets/images/banner/banner2.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '50vh', // adjust the height as needed
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                overflowY: 'hidden',
                color: 'white', // adjust text color if needed
            }}>
                <Typography variant="h4" align="center">
                    BESPOKE JEWELLERY. CRAFTED IN INDIA. IMAGINED BY YOU.
                </Typography>
            </Box>
            <Box sx={{
                backgroundImage: 'url("https://indiajewelleryhub.com/assets/images/banner/newbanner2.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '50vh', // adjust the height as needed
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflowY: 'hidden',
                width: '100%',
                color: 'white', // adjust text color if needed
            }}>
                <Typography variant="h4" align="center">
                    BESPOKE JEWELLERY. CRAFTED IN INDIA. IMAGINED BY YOU.
                </Typography>
            </Box>
            {/* Add more slides as needed */}
        </Slider>
    );
};

export default CarouselComponent;
