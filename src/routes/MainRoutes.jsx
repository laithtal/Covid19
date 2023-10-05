import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {CovidStatistics} from '../pages/CovidStatistics';
import { CovidCurrent } from '../pages';
import { CovidData } from '../pages';


function MainRoutes() {
  return (
    <>
    <Routes>
    <Route exact path='/' element={<CovidCurrent/>}/>
      <Route exact path='/historical-data' element={<CovidStatistics/>}/>
      <Route exact path='/covid-data' element={<CovidData/>}/>
    </Routes>
    </>
  )
}

export default MainRoutes