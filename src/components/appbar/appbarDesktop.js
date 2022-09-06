import "../../App.css";
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import Actions from "./actions";



export default function AppbarDesktop({ matches }) {
  


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
          </MyList>
       <Actions matches={matches} />   
    </AppbarContainer>
  );
}