// import {
//   Box,
//   Divider,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Stack,
//   Typography,
// } from "@mui/material";
import "../../App.css";
import {
  // AppbarActionIcons,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
// import PersonIcon from "@mui/icons-material/Person";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Actions from "./actions";
// import { useUIContext } from "../../context/ui";


export default function AppbarDesktop({ matches }) {
  
  // const { setShowSearchBox } = useUIContext();

  const accessTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView();
  }

  return (
    <AppbarContainer >
      <AppbarHeader variant="h4">Welcome to Pharmacy</AppbarHeader>
      <MyList type="row" className="header">
      <li className="link" onClick={() => accessTo("home")}>
          Home
        </li>
        <li className="link" onClick={() => accessTo("product")}>
          Product
        </li>
        <li className="link" onClick={() => accessTo("about")}>
          About
        </li>
        {/* <ListItemText primary="Home" id="home" />
        <ListItemText primary="Products" id="product" />
        <ListItemText primary="About us" id="about" />
        <ListItemButton>
          <ListItemIcon> */}
            {/* <SearchIcon onClick={() => setShowSearchBox(true)}></SearchIcon> */}
          {/* </ListItemIcon>
        </ListItemButton> */}
          </MyList>
       <Actions matches={matches} />   
    </AppbarContainer>
  );
}