import React from 'react';
import {CardActionArea, CardContent, Typography} from "@mui/material";
import {Card} from './Card';
import {Route, Routes,Link} from "react-router-dom";
import { LeagueTimetable } from '../LeagueTimetable/LeagueTimetable';

const LeagueCard= () => {
    return(
        <><Link to="/timetable">
            <div className='container'>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                World ChampionShip
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Russia
                            </Typography>
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