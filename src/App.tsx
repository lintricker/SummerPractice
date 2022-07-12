import React from 'react';
import LeaguePage from './Components/LeaguePage/LeaguePage';
import Header from './Components/Header/Header';
import { Routes, Route, Navigate } from "react-router-dom";
import { Teams } from './Components/Teams/Teams';
import {LeagueTimetable} from "./Components/LeagueTimetable/LeagueTimetable";


function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Navigate replace to="/leagues" />} />
            <Route path="/leagues" element={<LeaguePage />}>
                <Route path="/timetable" element={<LeagueTimetable/>}/>
            </Route>
            <Route path="/teams" element={<Teams />}/>
        </Routes>
    </div>
  );
}
export default App;
