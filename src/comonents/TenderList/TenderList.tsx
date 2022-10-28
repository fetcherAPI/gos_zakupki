import React from "react";
import { useLocation } from "react-router-dom";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { Pagination } from "@mui/material";
type Props = {};

const TenderList = (props: Props) => {
  const location = useLocation();

  return (
    <div>
      <div className='header'>
        <p>{`кабинет${location.pathname}`}</p>
        <h1>Создать объявления</h1>
      </div>
      <Stack direction='row' spacing={2}>
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
      </Stack>
      <br />
      <Stack direction='row' spacing={2}>
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
        <Button variant='contained'>Contained</Button>
      </Stack>
      <div className='TendersBlock'></div>
      <Pagination count={10} variant='outlined' shape='rounded' />
    </div>
  );
};

export default TenderList;
