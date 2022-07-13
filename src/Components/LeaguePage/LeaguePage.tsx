import React from 'react';
import LeagueCard from '../LeagueCard/LeagueCard';
import { TextField } from './TextField';
import { Grid } from './Grid';

const LeaguePage = () => {
  const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <TextField id="standard-basic" label="Поиск" variant="standard" />
      <Grid container>
        <Grid item>
          {cards.map((item: number, index) => (
            <LeagueCard key={index} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
export default LeaguePage;
