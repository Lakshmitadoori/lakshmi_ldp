import { Box, Card, CardContent, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

interface Button {
  id: number;
  title: string;
  src?: JSX.Element;
  path?: string;
}

const lists: Button[] = [
  { id: 1, title: "Home", src: <HomeOutlinedIcon />, path: "/home" },
  {
    id: 2,
    title: "Dashboard",
    src: <GridViewOutlinedIcon />,
    path: "/dashboard"
  },
  {
    id: 3,
    title: "Products",
    src: <Inventory2OutlinedIcon />,
    path: "/products"
  },
  { id: 4, title: "Messages", src: <EmailOutlinedIcon />, path: "/messages" },
  { id: 5, title: "Order", src: <LocalMallOutlinedIcon />, path: "/order" },
  {
    id: 6,
    title: "Calendar",
    src: <CalendarMonthOutlinedIcon />,
    path: "/calendar"
  },
  {
    id: 7,
    title: "Documents",
    src: <DescriptionOutlinedIcon />,
    path: "/documents"
  }
];

export const NavBar = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(0);

  const handleColor = (list: { id: number; title: string }) => {
    setSelected(list.id);
  };

  const handleNavigate = (path: any) => {
    navigate(path);
  };
  return (
    <div>
      <Card
        sx={{
          height: "900px",
          width: "250px",
          margin: "50px",
          backgroundColor: "#F5F5F5"
        }}
      >
        <CardContent
          sx={{
            "&.MuiCardContent-root": {
              padding: "0px",
              paddingTop: "28px",
              paddingBottom: "0px"
            }
          }}
        >
          <Stack direction={"column"}>
            {lists.map((list) => (
              <Button
                sx={{
                  "&.MuiButton-root": {
                    width: "206px",
                    height: "44px",
                    borderRadius: "8px",
                    marginBottom: "11px",
                    marginLeft: "16px",
                    textTransform: "none",
                    color: "#2C2C2E",
                    "&.MuiButtonBase-root": {
                      WebkitJustifyContent: "left",
                      justifyContent: "left"
                    }
                  }
                }}
                role="button"
                key={list.id}
                onClick={() => {
                  handleColor(list);
                  handleNavigate(list.path);
                }}
                style={{
                  backgroundColor: list.id === selected ? "#EFF2FF" : "",
                  color: list.id === selected ? "#224DFF" : ""
                }}
                startIcon={list.src}
              >
                {list.title}
              </Button>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};
