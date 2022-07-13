import React from 'react';
import {CardActionArea, CardContent, Typography} from "@mui/material";
import {Card} from './Card';
import { Competition } from '../slices/counterSlice';
import { NavLink } from 'react-router-dom';

interface LeagueCardProps{
    item: Competition
}

const LeagueCard: React.FC<LeagueCardProps> = ({item}) => {
    return(
        <><NavLink to="timetable">
            <div className='container'>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">{item.name}</Typography>
                            <Typography variant="body2" color="text.secondary">{item.area.name}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </NavLink>
        </>
)
}
export default LeagueCard;
