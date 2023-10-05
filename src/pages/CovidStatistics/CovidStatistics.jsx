import React, { useCallback, useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Statistics } from "../../services/Statistics";
import { Box, Grid, Typography } from "@mui/material";
import { CovidTable } from "../../Components/CovidTable";

const CovidStatistics = () => {
  const [statesStatistics, setStatesStatistics] = useState();

  const getStatistics = useCallback(async () => {
    const res = await Statistics();
    if (res.status === 200) {
      setStatesStatistics(res.data);
    } else setStatesStatistics([]);
  }, []);

  useEffect(() => {
    getStatistics();
  }, [getStatistics]);

  return (
    <>
      <MainLayout>
        {/* Home page start up */}

        <Grid>
          {statesStatistics && (
            <Box>
              <Typography variant="h1" gutterBottom>
              Historical Data Table
              </Typography>
              <CovidTable data={statesStatistics} />
            </Box>
          )}
        </Grid>
      </MainLayout>
    </>
  );
};

export { CovidStatistics };
