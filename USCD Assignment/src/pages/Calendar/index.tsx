import { NavBarTemplate } from "../../components/template/NavBarTemplate";
import { NavBar } from "../../components/organisms/NavBar";
import { Typography } from "../../components/atoms/Typography";

export const Calendar = () => {
  return (
    <NavBarTemplate
      sideNav={<NavBar />}
      main={<Typography text={"Calendar"}></Typography>}
    ></NavBarTemplate>
  );
};
