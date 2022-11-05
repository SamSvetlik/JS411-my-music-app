import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';


export default function OnlineMode(props) {
  return (
    <Card sx={{ width: 275, textAlign: "left"}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Online Mode
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Is this application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
        <Switch defaultChecked color="secondary" onChange={() => props.setOnlineMode(!props.onlineMode)}/>
      </CardActions>
    </Card>
  );
}
