import React from 'react';
import LeaguePage from './Components/LeaguePage/LeaguePage';
import Header from './Components/Header/Header';
import { Routes, Route} from "react-router-dom";
import { Teams } from './Components/Teams/Teams';
import {LeagueTimetable} from "./Components/LeagueTimetable/LeagueTimetable";


function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route index element={<LeaguePage />} />
            <Route path="/leagues" element={<LeaguePage />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/leagues/timetable" element={<LeagueTimetable/>}/>
        </Routes>
    </div>
  );
}
export default App;
