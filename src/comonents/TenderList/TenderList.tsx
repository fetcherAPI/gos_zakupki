import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { Pagination } from "@mui/material";
import classes from "../../scss/global.module.scss";

type Props = {};

const TenderList = (props: Props) => {
  return (
    <>
      <div className={classes.header}>
        <p>{`кабинет`}</p>
        <h1>Создать объявления</h1>
      </div>
      <Stack direction='row' sx={{ flexWrap: "wrap" }} rowGap={2} columnGap={2}>
        <TextField
          id='outlined-basic'
          label='Outlined'
          sx={{
            backgroundColor: "white",
          }}
          variant='outlined'
          size='small'
        />
        <TextField
          id='outlined-basic'
          label='Outlined'
          sx={{
            backgroundColor: "white",
          }}
          variant='outlined'
          size='small'
        />
        <TextField
          id='outlined-basic'
          label='Outlined'
          sx={{
            backgroundColor: "white",
          }}
          variant='outlined'
          size='small'
        />
        <TextField
          id='outlined-basic'
          label='Outlined'
          sx={{
            backgroundColor: "white",
          }}
          variant='outlined'
          size='small'
        />
        <TextField
          id='outlined-basic'
          label='Outlined'
          sx={{
            backgroundColor: "white",
          }}
          variant='outlined'
          size='small'
        />
        <TextField
          id='outlined-basic'
          label='Outlined'
          sx={{
            backgroundColor: "white",
          }}
          variant='outlined'
          size='small'
        />
      </Stack>
      <br />
      <Stack direction='row' sx={{ flexWrap: "wrap" }} rowGap={2} columnGap={2}>
        <TextField
          id='outlined-basic'
          label='Outlined'
          sx={{
            backgroundColor: "white",
          }}
          variant='outlined'
          size='small'
        />
        <TextField
          id='outlined-basic'
          label='Outlined'
          sx={{
            backgroundColor: "white",
          }}
          variant='outlined'
          size='small'
        />
        <TextField
          id='outlined-basic'
          label='Outlined'
          sx={{
            backgroundColor: "white",
          }}
          variant='outlined'
          size='small'
        />
        <Button
          variant='contained'
          sx={{
            backgroundColor: "#F8D043",
          }}
        >
          Поиск
        </Button>
      </Stack>
      <div className='TendersBlock'></div>
      <Pagination count={10} variant='outlined' shape='rounded' />
    </>
  );
};

export default TenderList;
