import React from 'react';
import {Grid, TextField} from '@mui/material';
import LeagueCard from "./LeagueCard";

const LeaguePage = () => {
    return(
    <div>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <Grid  container alignItems="stretch" spacing={3}>

                <Grid  item xs={12} sm={6} md={6}>
                    <LeagueCard />
                </Grid>
        </Grid>
    </div>)
}
export default LeaguePage;