import "./App.css";
import Sidebar from "./comonents/sidebar";
import Box from "@mui/material/Box";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <div className='wrapper'>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <AppRouter />
        </Box>
      </Box>
    </div>
  );
}

export default App;
