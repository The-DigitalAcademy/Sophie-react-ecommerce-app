import { ActionIconsContainerDesktop, ActionIconsContainerMobile } from "../../styles/appbar";


export default function Actions({ matches }) {

  const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

  return (
    <Component>
      
    </Component>
  );
}