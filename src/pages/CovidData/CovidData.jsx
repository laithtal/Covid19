import { Grid } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { BarChart } from "../../Components/BarChart/BarChart";
import { AllStates } from "../../services/AllStates";
import { LineChart } from "../../Components/LineChart/LineChart";
import MainLayout from './../../layouts/MainLayout';

const CovidData = () => {
  const [CovidData, setCovidData] = useState();

  const getCovidData = useCallback(async () => {
    const res = await AllStates();
    if (res.status === 200) {
      setCovidData(res.data.slice(0, 10));
    } else setCovidData([]);
  }, []);

  useEffect(() => {
    getCovidData();
  }, [getCovidData]);

  return (
    <MainLayout>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {CovidData && (
        <Grid item xs={6}>
          <BarChart chartData={CovidData}></BarChart>
        </Grid>
      )}
      {CovidData && (
        <Grid item xs={6}>
          <LineChart chartData={CovidData}></LineChart>
        </Grid>
      )}
    </Grid>
   </MainLayout>
  );
};

export {CovidData}
