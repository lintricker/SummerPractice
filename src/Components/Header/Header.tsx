import {AppBar, Container, Toolbar} from '@mui/material';
import React from 'react';
import { Typography } from './Typography';
import { Button } from './NavButton';

function MainHeader() {
  return (
    <AppBar position="static">
       <Container>
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap>LOGO</Typography>
               <div>
                 <Button>Лиги</Button>
               </div>
               <div>
                 <Button>Команды</Button>
               </div>
          </Toolbar>
       </Container>
    </AppBar>
  );
}
export default MainHeader;