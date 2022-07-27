import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarDesktop from "./appbarDesktop";
import AppbarMilbe from "./appbarMobile";


export default function Appbar(){

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return(
        <>
             {matches ? (
             <AppbarMilbe matches={matches} /> 
             ) : (
             <AppbarDesktop matches={matches} />
             )}
        </>
    );
}