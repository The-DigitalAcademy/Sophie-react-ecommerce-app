import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarDesktop from "./appbarDesktop";
import AppbarMoilbe from "./appbarMobile";


export default function Appbar({cartProducts, handleClickOpen}){

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return(
        <>
             {matches ? (
             <AppbarMoilbe matches={matches} /> 
             ) : (
             <AppbarDesktop matches={matches} cartProducts={cartProducts} handleClickOpen={handleClickOpen} />
             )}
        </>
    );
}