import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { SignInPage } from "./components/pages/SignInPage";
import { SignUpPage } from "./components/pages/SignUpPage";
import { HomePage } from "./components/pages/HomePage";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Routes>
        <Route path={ROUTES.LOGIN} element={<SignInPage />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
