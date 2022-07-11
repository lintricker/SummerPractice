import React from 'react';
import LeagueCard from "../LeagueCard/LeagueCard";
import { TextField } from './TextField';
import { Grid } from './Grid';
import { useSelector, useDispatch } from 'react-redux';
import { Competition } from '../slices/counterSlice';
import { } from '../slices/counterSlice';

interface LeagueCardProps{
    item: Competition
}

const LeaguePage: React.FC<LeagueCardProps> = ({item}) =>{
    const count = useSelector((state) => state.counter.competions);
    const dispatch = useDispatch();
    return(
    <div>
        <TextField id="standard-basic" label="Поиск" variant="standard" />
        <Grid  container  >
                <Grid item>
                    {count.map((item.name, item.area.name)=>(
                        <LeagueCard key={item.id}/>))}
                </Grid>
        </Grid>
    </div>)
}
export default LeaguePage;