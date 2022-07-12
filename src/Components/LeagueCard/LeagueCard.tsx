import React from 'react';
import { CardActionArea, CardContent, Typography } from '@mui/material';
import { Card } from './Card';

const LeagueCard = () => {
  return (
    <div className="container">
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
  );
};
export default LeagueCard;
