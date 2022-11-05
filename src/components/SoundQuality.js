import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function MasterVolume(props) {
    return (
      <Card sx={{ width: 275, textAlign: "left"}}>
        <CardContent>
          <Typography variant="h5" component="div">
            Sound Quality
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Manually control the music quality in event of poor connection
          </Typography>
        </CardContent>
        <CardActions>
        <FormControl fullWidth>
        <InputLabel >Sound Quality </InputLabel>
        <Select
            value={props.soundQuality}
            label="Sound Quality"
            onChange={(event) => {props.setSoundQuality(event.target.value)}}
        >
          <MenuItem value={"Low"}>Low</MenuItem>
          <MenuItem value={"Normal"}>Normal</MenuItem>
          <MenuItem value={"High"}>High</MenuItem>
        </Select>
      </FormControl>
        </CardActions>
      </Card>
    );
  }