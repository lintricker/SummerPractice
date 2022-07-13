import React from 'react';
import LeagueCard from "../LeagueCard/LeagueCard";
import { TextField } from './TextField';
import { Grid } from './Grid';
import { useSelector } from 'react-redux';
import { RootState } from '../slices/index';

const LeaguePage: React.FC<{}> = () =>{
    const count = useSelector((state:RootState) => state.counter.competitions);
    return(
    <div>
        <TextField id="standard-basic" label="Поиск" variant="standard" />
        <Grid  container  >
                <Grid item>
                    {count.map((item)=>(
                        <LeagueCard key={item.id} item={item}/>))}
                </Grid>
        </Grid>
    </div>)
}
export default LeaguePage;
