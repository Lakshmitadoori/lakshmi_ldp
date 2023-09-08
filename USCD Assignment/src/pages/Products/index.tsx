import { NavBarTemplate } from "../../components/template/NavBarTemplate";
import { NavBar } from "../../components/organisms/NavBar";
import { Typography } from "../../components/atoms/Typography";

export const Products = () => {
  return (
    <NavBarTemplate
      sideNav={<NavBar />}
      main={<Typography text="Products"></Typography>}
    ></NavBarTemplate>
  );
};
