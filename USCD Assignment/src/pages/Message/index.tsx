import { NavBarTemplate } from "../../components/template/NavBarTemplate";
import { NavBar } from "../../components/organisms/NavBar";
import { Typography } from "../../components/atoms/Typography";

export const Message = () => {
  return (
    <NavBarTemplate
      sideNav={<NavBar />}
      main={<Typography text={"Message"}></Typography>}
    ></NavBarTemplate>
  );
};
