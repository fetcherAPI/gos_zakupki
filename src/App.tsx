import { AppRouter } from "./routes/AppRouter";
import Box from "@mui/material/Box";
import classes from "./index.module.scss";
import Sidebar from "./comonents/sidebar";
import "./App.css";

function App() {
  return (
    <Box sx={{ display: "flex" }} className={classes.box}>
      <Sidebar />
      <Box
        component='main'
        className='box'
        sx={{ flexGrow: 1, p: 3, width: 100 }}
      >
        <AppRouter />
      </Box>
    </Box>
  );
}

export default App;
