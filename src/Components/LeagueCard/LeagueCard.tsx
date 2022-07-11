import React from 'react';
import {CardActionArea, CardContent, Typography} from "@mui/material";
import {Card} from './Card';
import {Route, Routes,Link} from "react-router-dom";
import { LeagueTimetable } from '../LeagueTimetable/LeagueTimetable';
import { Competition } from '../slices/counterSlice';

interface LeagueCardProps{
    item: Competition
}

const LeagueCard: React.FC<LeagueCardProps> = ({item}) => {
    return(
        <><Link to="/timetable">
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
        </Link><Routes>
            <Route path="/timetable" element={<LeagueTimetable/>}/>
        </Routes></>
)
}
export default LeagueCard;
