import React from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CardList2 = () => {
    const cards = [
        {
            title: "ADVERTISING OPPORTUNITIES",
            products: "Coming Soon",
            image: "https://via.placeholder.com/300", // Placeholder image URL
        },
        {
            title: "ADVERTISING OPPORTUNITIES",
            products: "Coming Soon",
            image: "https://via.placeholder.com/300", // Placeholder image URL
        },
        {
            title: "ADVERTISING OPPORTUNITIES",
            products: "Coming Soon",
            image: "https://via.placeholder.com/300", // Placeholder image URL
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
        <HorizontalScrollContainer>

            {cards.map((card, index) => (
                <Card key={index} sx={{ minWidth: 420, flex: '0 0 auto' }} >
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
            ))}
        </HorizontalScrollContainer>
    );
};

export default CardList2;
