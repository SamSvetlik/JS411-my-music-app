import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'

export default function LoginForm() {
  return (
    <Box
      component="form"
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        justifyContent: "center",
        gap: "12px",
        width: "400px"
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" variant="outlined" type="email"/>
      <TextField id="outlined-basic" label="Password" variant="filled" type="password" />
      <Button>Sign in</Button>
    </Box>
  );
}
