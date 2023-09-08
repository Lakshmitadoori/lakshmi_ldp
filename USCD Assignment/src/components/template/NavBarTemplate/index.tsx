import { Card, CardContent, Grid } from "@mui/material";

interface NavBarTempProps {
  sideNav: React.ReactNode;
  main: React.ReactNode;
}

export const NavBarTemplate = ({ sideNav, main }: NavBarTempProps) => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={2.4}>
          {sideNav}
        </Grid>
        <Grid
          container
          item
          spacing={2}
          direction="column"
          xs={9.6}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Card
              sx={{
                height: "400px",
                width: "400px",
                backgroundColor: "#F5F5F5"
              }}
            >
              <CardContent>{main}</CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
