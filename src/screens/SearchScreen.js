import { Grid } from '@mui/material'
import { StyledButton, StyledTextField } from '../style';
import { Stack } from '@mui/system'
import React from 'react'
import SearchCard from '../components/SearchCard';

export const SearchScreen = () => {
    const results = []
    return (
        <>
            <Grid container alignItems='center' direction="column" justifyContent='center' sx={{ m: 2 }}>

                <Stack direction="row">
                    <StyledTextField sx={{ width: 600, height: 50 }} label="Search for product"></StyledTextField>
                    <StyledButton>Search</StyledButton>
                </Stack>

                <SearchCard results={results} />

            </Grid>
            {/* <div style={{ display: 'grid', gridTemplateColumns: "1fr 3fr", width: '50vw', height: '20vh' }}>
                <div>
                    <img src="https://indiajewelleryhub.com/assets/images/Top Search/Rectangle 147.jpg" alt="" srcset="" />
                </div>
                <div>
                    <div>
                        <h3>LAKSHMI JEWELLERS</h3>

                        <div>
                            <span>test</span>
                            <span>test</span>
                        </div>
                        <div>
                            <span>test</span>
                            <span>test</span>
                        </div>
                        <div>
                            <span>test</span>
                            <span>test</span>
                        </div>
                    </div>
                </div>
            </div> */}

        </>

    )
}
