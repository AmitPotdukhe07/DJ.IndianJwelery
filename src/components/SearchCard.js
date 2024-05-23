import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';

const cardData = [
    {
        logo: 'https://gjepc.s3.ap-south-1.amazonaws.com/9df7d0b6-d79b-4762-b0e3-8e2fbfac15d5', // Replace with actual logo URL
        companyName: 'ASIAN STAR CO. LTD.',
        products: 'Platinum Jewellery, Colour Stone Studded Jewellery, Loose Diamond, Diamond Jewellery',
        exportMarkets: 'Not Available',
        location: 'MUMBAI (IN)'
    },
    {
        logo: 'https://gjepc.s3.ap-south-1.amazonaws.com/ca1e41fa-b346-466e-b6a3-bdf643cc99a6', // Replace with actual logo URL
        companyName: 'Shubham Patel',
        products: 'Not Available',
        exportMarkets: 'Not Available',
        location: 'Not Available'
    }
];

const ResponsiveCard = ({ logo, companyName, products, exportMarkets, location }) => {
    return (
        <Card sx={{ margin: 2, display: 'flex', flexDirection: { xs: 'column', sm: 'row', border: '2px solid #a59e65', maxHeight: '28vh' } }}>
            <CardMedia
                component="img"
                sx={{ width: { md: '32%', xs: '100%', sm: 150 }, height: { md: '100%', xs: 100, sm: 'auto' }, objectFit: 'contain' }}
                image={logo}
                alt="Company Logo"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        {companyName}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <strong>PRODUCTS:</strong> {products}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <strong>EXPORT MARKETS:</strong> {exportMarkets}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <strong>LOCATION:</strong> {location}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

const SearchCard = () => {
    return (
        <Grid container justifyContent="center">
            {cardData.map((data, index) => (
                <Grid item xs={12} sm={10} md={8} key={index}>
                    <ResponsiveCard {...data} />
                </Grid>
            ))}
        </Grid>
    );
};

export default SearchCard;
