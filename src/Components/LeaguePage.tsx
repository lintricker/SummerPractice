import React from 'react';
import {Grid, TextField} from '@mui/material';
import LeagueCard from "./LeagueCard";

const LeaguePage = () => {
    const cards = [0,1,2,3,4,5,6,7,8,9];
    return(
    <div>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <Grid  container alignItems="stretch" spacing={3}>
                <Grid  item xs={12} sm={6} md={6}>
                    {cards.map((item: number)=>(
                    <LeagueCard />))}
                </Grid>
        </Grid>
    </div>)
}
export default LeaguePage;