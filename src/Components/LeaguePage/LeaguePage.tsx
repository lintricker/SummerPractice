import React from 'react';
import LeagueCard from "../LeagueCard/LeagueCard";
import { TextField } from './TextField';
import { Grid } from './Grid';
import { useSelector } from 'react-redux';

const LeaguePage = () => {
    const count = useSelector((state) => state.counter.competions);
    return(
    <div>
        <TextField id="standard-basic" label="Поиск" variant="standard" />
        <Grid  container  >
                <Grid item>
                    {count.map((item.name, item.area.name, item.id)=>(
                    <LeagueCard key={item.id}/>))}
                </Grid>
        </Grid>
    </div>)
}
export default LeaguePage;