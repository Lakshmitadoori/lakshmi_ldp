import React from "react";
import { Box } from "@mui/material";
import { theme } from "../../../theme/theme";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../../atoms/button";
import Typography from "../../atoms/Typography";
import { HomeText, Logout } from "./constants";

export const HomePage = () => {
  const { logout } = useAuth0();
  const handleLogoutClick = () => {
    logout({
      logoutParams: { returnTo: window.location.origin + "/login" },
    });
  };
  return (
    <Box sx={{ justifyContent: "center" }}>
      <Typography
        variant="h3"
        color={theme.palette.textColor.purple400}
        marginBottom="40px"
      >
        {HomeText}
      </Typography>
      <Button onClick={handleLogoutClick}>
        <Typography variant="button" color={theme.palette.primary.highEmphasis}>
          {Logout}
        </Typography>
      </Button>
    </Box>
  );
};
