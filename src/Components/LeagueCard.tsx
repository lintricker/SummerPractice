import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

const LeagueCard= () => {
    return(
        <div className='container'>
        <Card sx={{ maxWidth: 345 }}>
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
    )
}
export default LeagueCard;