import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Auth0Provider
    domain="dev-ffida8gd7gxbzetg.us.auth0.com"
    clientId="7k3FWF3IrbnKmWiDzmzfXVWHNNoLGDy3"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeProvider>
    </BrowserRouter>
  </Auth0Provider>
);
