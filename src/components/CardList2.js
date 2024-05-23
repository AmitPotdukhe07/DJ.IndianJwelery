import React from 'react';
import { Box, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CardList2 = () => {
    const cards = [
        {
            title: "ADVERTISING OPPORTUNITIES",
            products: "Coming Soon",
            image: "https://indiajewelleryhub.com/assets/images/featured.jpg",
        },
        {
            title: "ADVERTISING OPPORTUNITIES",
            products: "Coming Soon",
            image: "https://gjepc.s3.ap-south-1.amazonaws.com/95d5aad6-d77c-4d2c-9372-d1242f51d952",
        },
        {
            title: "ADVERTISING OPPORTUNITIES",
            products: "Coming Soon",
            image: "https://gjepc.s3.ap-south-1.amazonaws.com/fba71e9a-a8f0-4328-91fd-9dc20e3a821c",
        },
    ];

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
        <Grid container spacing={1} >

            {cards.map((card, index) => (
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Card Card key={index} sx={{ minWidth: 380, flex: '0 0 auto' }} style={{ borderBottom: '4px solid #a59e65', borderLeft: '2px solid #a59e65', borderRight: '2px solid #a59e65', boxShadow: ' 1px 1px 5px 1px black' }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image={card.image}
                            alt={card.title}

                        />
                        <CardContent >
                            <Typography variant="h6" component="div" gutterBottom>
                                {card.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                PRODUCTS: {card.products}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))
            }
        </Grid >
    );
};

export default CardList2;
