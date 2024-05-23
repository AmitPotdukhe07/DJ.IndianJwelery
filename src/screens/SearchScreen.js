import { Grid, Input, Typography } from '@mui/material'
import { StyledButton, StyledButton1, StyledTextField } from '../style';
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import SearchCard from '../components/SearchCard';
import CardList2 from '../components/CardList2';

export const SearchScreen = () => {
    const results = []
    const [searchCount, setSearchCount] = useState(0);

    const SearchBox = () => {
        return <>
            <Grid container alignItems="center" justifyContent="flex-start" >
                <Grid item md={8}>
                    <Input id="filled-basic" placeholder="Search for product" variant="filled" sx={{ width: 600, borderTop: '1px solid grey', borderLeft: '1px solid grey', borderRight: '1px solid grey', padding: '5px', marginRight: '10px' }}></Input>
                </Grid >

                <Grid item md={2}>
                    <StyledButton1>Search</StyledButton1>
                </Grid>
            </Grid>
        </>
    }

    const FeaturedResults = () => {
        return <>
            <div style={{ margin: "50px 0" }}>
                <Grid container alignItems='center' justifyContent='space-between' style={{ height: '10vh' }}>
                    <Grid item >
                        <img src="https://indiajewelleryhub.com/assets/images/patterns/pattern7-left.png" alt="" style={{ width: '20vw', height: 'fit-content' }} />
                    </Grid>
                    <Grid item><Typography variant='h3' style={{ overflowY: 'hidden', fontWeight: 800, color: '#3f4042' }}>Featured Members</Typography></Grid>
                    <Grid item>
                        <img src="https://indiajewelleryhub.com/assets/images/patterns/pattern7-left.png" alt="" style={{ width: '20vw', height: 'fit-content' }} />
                    </Grid>
                </Grid>
            </div>
            <CardList2 />
        </>
    }

    return (
        <div style={{ margin: "50px 0" }}>
            <Grid container direction="row"
                justifyContent="center"
                alignItems="center">

                <Grid item >
                    <Input id="filled-basic" placeholder="Search for product" variant="filled" sx={{ width: 600, borderTop: '1px solid grey', borderLeft: '1px solid grey', borderRight: '1px solid grey', padding: '5px', marginRight: '10px' }}></Input>
                </Grid>

                <Grid item >
                    <StyledButton1>Search</StyledButton1>
                </Grid>


            </Grid>

            <div className='container' >
                <Grid container alignItems='center' justifyContent='space-between' style={{ height: '10vh' }}>
                    <Grid item >
                        <img src="https://indiajewelleryhub.com/assets/images/patterns/pattern7-left.png" alt="" style={{ width: '20vw', height: 'fit-content' }} />
                    </Grid>
                    <Grid item><Typography variant='h3' style={{ overflowY: 'hidden', fontWeight: 800, color: '#3f4042' }}>Featured Members</Typography></Grid>
                    <Grid item>
                        <img src="https://indiajewelleryhub.com/assets/images/patterns/pattern7-left.png" alt="" style={{ width: '20vw', height: 'fit-content' }} />
                    </Grid>
                </Grid>
            </div>
            <div className='container'>
                <CardList2 />
            </div>

            <div className='container' style={{ marginTop: '2vh' }}>
                <Typography variant='h4'>{searchCount} Search Result</Typography>

                <SearchCard />
            </div>
        </div>

    )
}
