import React from 'react';
import LeaguePage from './Components/LeaguePage/LeaguePage';

import {AppBar, Container, Toolbar} from "@mui/material";
import {Typography} from "./Components/Header/Typography";
import {Button} from "./Components/Header/NavButton";
import { Routes, Route, Link} from "react-router-dom";
import { Teams } from './Components/Teams/Teams';

function App() {
  return (
    <div className="App">
        <header>
            <AppBar position="static">
                <Container>
                    <Toolbar disableGutters>
                        <Typography variant="h6" noWrap>LOGO</Typography>
                        <div>
                            <Button><Link to="/">Лиги</Link></Button>
                        </div>
                        <div>
                            <Button><Link to="/teams">Команды</Link></Button>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
        <Routes>
            <Route path="/" element={<LeaguePage />} />
            <Route path="/teams" element={<Teams />} />
        </Routes>
    </div>
  );
}
export default App;
