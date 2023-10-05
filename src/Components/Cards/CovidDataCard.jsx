import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';


 
const CovidDataCard = ({ data }) => {

  const cardStyle = {
    backgroundColor: '#f5f5f5', // Light gray background
    borderRadius: '12px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    minWidth: 280,
    margin: '20px', // Add some spacing around the card
    padding: '16px', // Add padding to content
  };

  const titleStyle = {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px', // Add spacing below the title
  };

  const fieldStyle = {
    marginBottom: '5px', // Add spacing below each field
  };

  return (
    <Card style={cardStyle}>
    <CardContent>
      <Typography variant="h6" style={titleStyle}>
        COVID-19 Statistics
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Date: {data.date}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        States: {data.states}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Positive Cases: {data.positive}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Negative Cases: {data.negative}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Pending Cases: {data.pending}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Currently Hospitalized: {data.hospitalizedCurrently}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Cumulative Hospitalized: {data.hospitalizedCumulative}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Currently in ICU: {data.inIcuCurrently}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Cumulative in ICU: {data.inIcuCumulative}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Currently on Ventilator: {data.onVentilatorCurrently}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Cumulative on Ventilator: {data.onVentilatorCumulative}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Date Checked: {data.dateChecked}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Total Deaths: {data.death}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Total Hospitalized: {data.hospitalized}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Total Test Results: {data.totalTestResults}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Last Modified: {data.lastModified}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Recovered: {data.recovered !== null ? data.recovered : 'N/A'}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Total: {data.total}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Positive/Negative: {data.posNeg}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Death Increase: {data.deathIncrease}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Hospitalized Increase: {data.hospitalizedIncrease}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Negative Increase: {data.negativeIncrease}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Positive Increase: {data.positiveIncrease}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Total Test Results Increase: {data.totalTestResultsIncrease}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={fieldStyle}>
        Hash: {data.hash}
      </Typography>
    </CardContent>
  </Card>
  );
};

export  {CovidDataCard};
