import React, { useCallback, useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Box, Grid, Typography } from "@mui/material";
import { CovidDataCard } from "../../Components/Cards";
import { Current } from "../../services/Current";

const CovidCurrent = () => {
  const [currentState, setCurrentState] = useState();

  const getCurrent = useCallback(async () => {
    const res = await Current();
    if (res.status === 200) {
        setCurrentState(res.data);
    } else setCurrentState([]);
  }, []);

  useEffect(() => {
    getCurrent();
  }, [getCurrent]);

  return (
    <>
      <MainLayout>

        <Grid>
          {currentState && (
            <Box>
              <Typography variant="h1" gutterBottom>
              Current Values
              </Typography>
              <CovidDataCard data={currentState[0]} />
            </Box>
          )}
        </Grid>
      </MainLayout>
    </>
  );
};

export { CovidCurrent };
