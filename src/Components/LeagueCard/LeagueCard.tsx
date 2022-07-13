import React from 'react';
import { CardActionArea, CardContent, Typography } from '@mui/material';
import { Card } from './Card';
import { NavLink } from 'react-router-dom';


const LeagueCard: React.FC<{}> = ({ item }) => {
  return (
    <>
      <NavLink to="timetable">
        <div className="container">
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.area.name}
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
