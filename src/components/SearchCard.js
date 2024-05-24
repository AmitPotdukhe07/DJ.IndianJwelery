import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import {useNavigate} from 'react-router-dom'
const cardData = [
    {
        logo: 'https://gjepc.s3.ap-south-1.amazonaws.com/9df7d0b6-d79b-4762-b0e3-8e2fbfac15d5',
        companyName: 'ASIAN STAR CO. LTD.',
        products: 'Platinum Jewellery, Colour Stone Studded Jewellery, Loose Diamond, Diamond Jewellery',
        exportMarkets: 'Not Available',
        location: 'MUMBAI (IN)'
    },
    {
        logo: 'https://gjepc.s3.ap-south-1.amazonaws.com/ca1e41fa-b346-466e-b6a3-bdf643cc99a6',
        companyName: 'Shubham Patel',
        products: 'Not Available',
        exportMarkets: 'Not Available',
        location: 'Not Available'
    }
];

const ResponsiveCard = ({ _id,frontImage, name, products, exportMarkets, location }) => {
    const navigate = useNavigate()
    // { frontImage, name, products, exportMarkets, location }
    console.log(products, name)
    return (
        
        <Card sx={{ margin: 2, display: 'flex', flexDirection: { xs: 'column', sm: 'row', border: '2px solid #a59e65', maxHeight: '28vh' } }} onClick={(e) => {navigate(`/product/${_id}`)}}>
            <CardMedia
                component="img"
                sx={{ width: { md: '32%', xs: '100%', sm: 150 }, height: { md: '100%', xs: 100, sm: 'auto' }, objectFit: 'contain' }}
                image={frontImage}
                alt="Company Logo"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        {name}
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

const SearchCard = (item) => {


    console.log("in child ", item)
    return (
        <Grid container justifyContent="center">
                <Grid item xs={12} sm={10} md={8} key={item.name}>
                    <ResponsiveCard {...item.item} />
                </Grid>
        </Grid>
    );
};

export default SearchCard;
