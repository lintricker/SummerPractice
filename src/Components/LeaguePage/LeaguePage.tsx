import React, { useEffect } from 'react';
import LeagueCard from '../LeagueCard/LeagueCard';
import { TextField } from './TextField';
import { Grid } from './Grid';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../slices/index';
import { getLeaguesInfo } from '../slices/leagues/competitionsList';

const LeaguePage: React.FC<{}> = () => {
  const competitions = useSelector((state: RootState) => state.leagues.competitionsList.competitions);
  const isLoading = useSelector((state: RootState) => state.leagues.competitionsList.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeaguesInfo());
  }, []);

  return (
    <div>
      <TextField id="standard-basic" label="Поиск" variant="standard" />
      {!isLoading && <Grid container>
        <Grid item>
          {competitions.map((item) => (
              <LeagueCard key={item.id} item={item}/>
          ))}
        </Grid>
      </Grid>
      }
    </div>
  );
};
export default LeaguePage;
