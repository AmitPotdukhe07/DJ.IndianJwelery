import React from 'react';
import { Box, Card, CardContent, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { Container, styled } from '@mui/system';

const CardList = () => {
    const cards = [
        {
            title: "Diamond Rings",
            image: "https://indiajewelleryhub.com/assets/images/Top%20Search/Rectangle%20147.jpg",
            description: "Colored Gemstone Studded Jewellery, Diamond Jewellery, Platinum Jewellery",
            markets: "Not Available Bahrain",
            location: "Not Available"
        },
        {
            title: "Gold Earing",
            image: "https://indiajewelleryhub.com/assets/images/Top%20Search/Rectangle%20147-1.jpg",
            description: "Colored Gemstone Studded Jewellery, Loose Gemstone ...",
            markets: "United States of America, United Arab Emirates, Canada ...",
            location: "Australia, United States of America, Canada ..."
        },
        {
            title: "Gold Rings",
            image: "https://indiajewelleryhub.com/assets/images/Top%20Search/Rectangle%20147-2.jpg",
            description: "Not Available",
            markets: "Not Available",
            location: "Not Available"
        },
        {
            title: "Studded Earing",
            image: "https://indiajewelleryhub.com/assets/images/Top%20Search/Rectangle%20147-3.jpg",
            description: "Silver Artifacts, Silver Jewellery",
            markets: "Australia, Thailand, Hong Kong ...",
            location: "Not Available"
        },
        {
            title: "Nose pins",
            image: "https://indiajewelleryhub.com/assets/images/Top%20Search/Rectangle%20147-4.jpg",
            description: "Silver Artifacts, Silver Jewellery",
            markets: "Australia, Thailand, Hong Kong ...",
            location: "Not Available"
        },
        {
            title: "Pearl Jewwellery",
            image: "https://indiajewelleryhub.com/assets/images/Top%20Search/Rectangle%20147-5.jpg",
            description: "Silver Artifacts, Silver Jewellery",
            markets: "Australia, Thailand, Hong Kong ...",
            location: "Not Available"
        },
        {
            title: "Gold Bracelets",
            image: "https://indiajewelleryhub.com/assets/images/Top%20Search/Rectangle%20147-6.jpg",
            description: "Silver Artifacts, Silver Jewellery",
            markets: "Australia, Thailand, Hong Kong ...",
            location: "Not Available"
        },
    ];

    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const GridContainer = styled(Box)(({ theme }) => ({
        display: 'grid',
        gap: '16px',
        padding: '16px',
        gridTemplateColumns: isSmallScreen ? 'repeat(auto-fill, minmax(100%, 1fr))' : 'repeat(4, 1fr)',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(auto-fill, minmax(50%, 1fr))',
        },
    }));

    const Overlay = styled(Box)({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    });
    const HorizontalScrollContainer = styled(Box)({
        display: 'flex',
        overflowX: 'auto',
        gap: '16px',
        padding: '16px',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    });
    return (
        < >
            <>
                <Grid container spacing={1}>
                    <Grid item alignItems="center" className='textImage' justifyContent="flex-end" xs={12} sm={6} md={3}>
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: '800', marginRight: '20px' }}>
                            <span style={{ color: '#a59e65' }}>Trending</span> <br /> Search
                        </Typography>
                        <img src="https://indiajewelleryhub.com/assets/images/patterns/pattern1.png" alt="" style={{ height: "100px" }} />
                    </Grid>


                    {cards.map((card, index) => (
                        <Grid item xs={12} sm={6} md={3}>
                            <Card key={index} className="test" sx={{
                                minWidth: 275,
                                backgroundImage: `url(${card.image})`,
                                backgroundSize: 'cover',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                fontWeight: '800',
                                height: '20vh',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 1,
                                textAlign: 'center',
                                backgroundPosition: 'center',
                            }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </>
        </>
    );
};

export default CardList;
