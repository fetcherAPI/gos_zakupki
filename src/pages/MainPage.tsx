import {AppRouter} from "../routes/AppRouter";
import Box from "@mui/material/Box";
import Sidebar from "../comonents/Sidebar";
import {useAppSelector} from "../hook/reduxHooks";

type Props = {};

export const MainPage = (props: Props) => {
    const {responseStatus} = useAppSelector(state => state.auth)
    if (responseStatus === 'pending') return <h1>Loading</h1>
    return (
        <Box sx={{display: "flex"}} className='box'>
            <Sidebar/>
            <Box
                component='main'
                className='box'
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: 100,
                    backgroundColor: "#e8f0f8",
                    minHeight: "100vh",
                }}
            >
                <AppRouter/>
            </Box>
        </Box>
    );
};
