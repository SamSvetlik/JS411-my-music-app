import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';


export default function MasterVolume(props) {
    return (
      <Card sx={{ width: 275, textAlign: "left"}}>
        <CardContent>
          <Typography variant="h5" component="div">
            Master Volume
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Overrides all other sound settings in this application
          </Typography>
        </CardContent>
        <CardActions>
        <Slider
                aria-label="Temperature"
                defaultValue={30}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
                onChange={(event, value)=> {props.setMasterVolume(value)}}
                />
        </CardActions>
      </Card>
    );
  }