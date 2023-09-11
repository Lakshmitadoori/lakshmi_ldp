import { Grid } from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../../theme/theme";
import TypographyComponent from "../../atoms/Typography";
import { InputField } from "../../atoms/inputField";
import emailIcon from "../../../../public/assets/images/direct-notification.svg";
import { Image } from "../../atoms/image";
import { Button } from "../../atoms/button";
import { SignInCard } from "../../molecules/SigninCard";
import lockIcon from "../../../../public/assets/images/lock.svg";
import smileIcon from "../../../../public/assets/images/smile.svg";
import {
  SIGNUP_EMAIL_PLACEHOLDER,
  SIGNUP_NAME_PLACEHOLDER,
  SIGN_UP_TITLE,
  SIGNUP_PASSWORD_PLACEHOLDER,
} from "./SignUpConstants";
import {
  LOGIN_TEXT,
  SIGN_UP_TEXT,
  emailWarningText,
  emptyField,
  regEmail,
  regPassword,
} from "../../../utils/constants";
import GoogleLogo from "../../../../public/assets/images/google.svg";
import { GOOGLE } from "../../molecules/SigninCard/SigininCardConstants";
import { useAuth0 } from "@auth0/auth0-react";
import { SignInCardProps } from "../../../utils/interfaces/SignInCardInterface";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface AuthFooterProps {
  footerText: string;
  footerLinkText: string;
}
export const AuthFooter = (props: AuthFooterProps) => {
  const { loginWithRedirect } = useAuth0();
  const signInCards: SignInCardProps[] = [
    {
      title: GOOGLE,
      iconSrc: GoogleLogo,
      iconAlt: GOOGLE,
      handleClick: () => {
        const redirectUri = window.location.origin + "/home";
        loginWithRedirect({
          appState: {
            returnTo: "/home",
          },
          authorizationParams: {
            connection: "google-oauth2",
            redirect_uri: redirectUri,
          },
        });
      },
    },
  ];

  return (
    <Grid item container direction="column" rowGap={8}>
      <Grid item container columnGap={5}>
        {signInCards.map((card) => (
          <Grid item key={card.title}>
            <SignInCard {...card} />
          </Grid>
        ))}
      </Grid>
      <Grid item container alignItems="center" columnGap={1.75}>
        <TypographyComponent
          variant="h3"
          color={theme.palette.textColor.lowEmphasis}
        >
          {props.footerText}
        </TypographyComponent>
      </Grid>
    </Grid>
  );
};
export const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nameHelperText, setNameHelperText] = useState<string>("");
  const [emailHelperText, setEmailHelperText] = useState<string>("");
  const [passwordHelperText, setPasswordHelperText] = useState<string>("");

  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameValue = e.target.value;
    setName(nameValue);
    if (nameValue === "") setNameHelperText(emptyField);
    else {
      setNameHelperText("");
    }
  };
  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (emailValue === "") setEmailHelperText(emptyField);
    else if (!regEmail.test(emailValue)) setEmailHelperText(emailWarningText);
    else {
      setEmailHelperText("");
    }
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = e.target.value;
    if (email === "") setEmailHelperText(emptyField);
    else {
      setPassword(passwordValue);
    }
  };

  const handleSignUp = () => {
    axios
      .post("http://localhost:9005/users/register", {
        name: name,
        password: password,
        email: email,
      })
      .then(async (response) => {
        console.log(response.data);
        const token = response.data;
        localStorage.setItem("accessToken", token);
        navigate("/login");
      });
  };

  return (
    <Grid
      container
      direction="column"
      maxWidth={theme.spacing(108.5)}
      rowGap={8}
      data-testid="sign-up"
    >
      <Grid item container direction="column" rowGap={10}>
        <Grid item>
          <TypographyComponent
            variant="h1"
            color={theme.palette.textColor.highEmphasis}
          >
            {SIGN_UP_TITLE}
          </TypographyComponent>
        </Grid>

        <Grid item container direction="column" rowGap={5}>
          <InputField
            type="text"
            id="name"
            value={name}
            startAdornment={<Image src={smileIcon} alt="smile-icon" />}
            onChange={handleInputName}
            helperText={nameHelperText}
            error={!!nameHelperText}
            placeholder={SIGNUP_NAME_PLACEHOLDER}
          />
          <InputField
            type="text"
            id="email"
            value={email}
            startAdornment={<Image src={emailIcon} alt="email-icon" />}
            placeholder={SIGNUP_EMAIL_PLACEHOLDER}
            onChange={handleInputEmail}
            helperText={emailHelperText}
            error={!!emailHelperText}
          />
          <Grid item container direction="column" rowGap={11.5}>
            <InputField
              type="password"
              value={password}
              startAdornment={<Image src={lockIcon} alt="password-Icon" />}
              placeholder={SIGNUP_PASSWORD_PLACEHOLDER}
              onChange={handlePassword}
              helperText={passwordHelperText}
              error={!!passwordHelperText}
            />
            <Button
              variant="primary"
              disabled={
                !(
                  name.trim() !== "" &&
                  regEmail.test(email) &&
                  regPassword.test(password)
                )
              }
              size="large"
              onClick={handleSignUp}
            >
              {SIGN_UP_TEXT}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <AuthFooter footerText={""} footerLinkText={LOGIN_TEXT} />
    </Grid>
  );
};
