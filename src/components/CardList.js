import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CardList = () => {
    const cards = [
        {
            title: "K.G.K. CREATIONS (INDIA) PVT. LTD.",
            description: "Colored Gemstone Studded Jewellery, Diamond Jewellery, Platinum Jewellery",
            markets: "Not Available Bahrain",
            location: "Not Available"
        },
        {
            title: "BR DESIGNS PVT.LTD.",
            description: "Colored Gemstone Studded Jewellery, Loose Gemstone ...",
            markets: "United States of America, United Arab Emirates, Canada ...",
            location: "Australia, United States of America, Canada ..."
        },
        {
            title: "KINU BABA JEWELLERY (INDIA) PVT. LTD.",
            description: "Not Available",
            markets: "Not Available",
            location: "Not Available"
        },
        {
            title: "BIJOUX ARGENT PVT LTD",
            description: "Silver Artifacts, Silver Jewellery",
            markets: "Australia, Thailand, Hong Kong ...",
            location: "Not Available"
        },
        // Add more cards as needed
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

            {/* <Card sx={{
                backgroundImage: 'url("https://indiajewelleryhub.com/assets/images/Top Search/Rectangle 147.jpg")',
                backgroundSize: 'cover',
            }}><CardContent>
                    <img src="https://indiajewelleryhub.com/assets/images/Top%20Search/Rectangle%20147.jpg" alt="shayd" />

                </CardContent></Card> */}
            {cards.map((card, index) => (
                <Card key={index} sx={{
                    minWidth: 275, flex: '0 0 auto', backgroundImage: 'url("https://indiajewelleryhub.com/assets/images/Top Search/Rectangle 147.jpg")',
                    backgroundSize: 'cover',
                    color: 'white',
                    height: '20vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '20vw',
                    textAlign: 'center',
                    backgroundPosition: 'center',
                }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {card.title}
                        </Typography>

                    </CardContent>
                </Card>
            ))}
        </HorizontalScrollContainer>
    );
};

export default CardList;
