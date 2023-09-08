import { NavBarTemplate } from "../../components/template/NavBarTemplate";
import { NavBar } from "../../components/organisms/NavBar";
import { Typography } from "../../components/atoms/Typography";

export const Home = () => {
  return (
    <NavBarTemplate
      sideNav={<NavBar />}
      main={<Typography text={"Home"}></Typography>}
    ></NavBarTemplate>
  );
};
