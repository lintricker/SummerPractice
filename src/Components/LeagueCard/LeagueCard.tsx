import React from 'react';
import { CardActionArea, CardContent, Typography } from '@mui/material';
import { Card } from './Card';
import { NavLink } from 'react-router-dom';

const LeagueCard = () => {
  return (
    <>
      <NavLink to="timetable">
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
      </NavLink>
    </>
  );
};
export default LeagueCard;
