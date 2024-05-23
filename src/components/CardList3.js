import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Box from '@mui/material/Box';

export function CardList3() {
    const cardData = [
        {
            image: "https://indiajewelleryhub.com/assets/images/Top%20Search/Rectangle%20147.jpg",
            alt: "Image 1"
        },
        {
            image: "https://indiajewelleryhub.com/assets/images/Top%20Search/Rectangle%20147-2.jpg",
            alt: "Image 2"
        },
        {
            image: "https://indiajewelleryhub.com/assets/images/Top%20Search/Rectangle%20147-3.jpg",
            alt: "Image 3"
        },
        {
            image: "https://indiajewelleryhub.com/assets/images/Top%20Search/Rectangle%20147-5.jpg",
            alt: "Image 4"
        }
    ];

    const TextImage = () => {
        return (
            <Grid alignItems="center" className='textImage' justifyContent="flex-start">
                <Typography variant="h6" gutterBottom sx={{ fontWeight: '800', lineHeight: '1.2' }}>
                    Top 10 <br />
                    <span style={{ color: '#a59e65' }}>Featured</span> <br /> Search
                </Typography>
                <img src="https://indiajewelleryhub.com/assets/images/patterns/pattern1.png" alt="" style={{ height: "80px" }} />
            </Grid>
        );
    }

    return (
        <>
            <Grid container direction='row' spacing={1}>
                {cardData.map((card, index) => (
                    <Grid item xs={12} sm={3} md={2.5} key={index}>
                        <Card sx={{ marginY: 1 }}>
                            <CardActionArea>
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={card.image}
                                        alt={card.alt}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            color: 'white',
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            padding: '10px'
                                        }}
                                    >
                                        <TextImage />
                                    </Box>
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
                <Grid item alignItems="center" className='textImage' justifyContent="flex-end" md={2}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: '800', marginRight: '20px' }}>
                        <span style={{ color: '#a59e65' }}>Curated</span> <br /> Collection
                    </Typography>
                    <img src="https://indiajewelleryhub.com/assets/images/patterns/pattern1.png" alt="" style={{ height: "100px" }} />
                </Grid>
            </Grid>
        </>
    );
}
