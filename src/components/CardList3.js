import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';



export function CardList3() {

    return (
        <Container>
            <Grid container direction='row' justifyContent='space-between'>

                <Card sx={{ maxWidth: 345, marginY: 1 }}>
                    <CardActionArea>
                        <Box sx={{ position: 'relative' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://indiajewelleryhub.com/assets/images/Top Search/Rectangle 147.jpg"
                                alt="green iguana"
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    color: 'white',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
                                    padding: '10px'
                                }}
                            >
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                {/* <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography> */}
                            </Box>
                        </Box>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345, marginY: 1 }}>
                    <CardActionArea>
                        <Box sx={{ position: 'relative' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://indiajewelleryhub.com/assets/images/Top Search/Rectangle 147.jpg"
                                alt="green iguana"
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    color: 'white',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
                                    padding: '10px'
                                }}
                            >
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                {/* <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography> */}
                            </Box>
                        </Box>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345, marginY: 1 }}>
                    <CardActionArea>
                        <Box sx={{ position: 'relative' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://indiajewelleryhub.com/assets/images/Top Search/Rectangle 147.jpg"
                                alt="green iguana"
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    color: 'white',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
                                    padding: '10px'
                                }}
                            >
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                {/* <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography> */}
                            </Box>
                        </Box>
                    </CardActionArea>
                </Card>

                <img src="https://indiajewelleryhub.com/assets/images/patterns/pattern1.png" alt="" style={{ height: '20vh' }} />
                <Grid item alignItems='center' justifyContent='center'>
                    <Typography variant='h5'>Curated</Typography>
                    <Typography variant='h5'>Collections</Typography>
                </Grid>

            </Grid>
        </Container>
    );
}
