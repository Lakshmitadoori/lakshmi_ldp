import { Grid } from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../../theme/theme";
import TypographyComponent from "../../atoms/Typography";
import { InputField } from "../../atoms/inputField";
import emailIcon from "../../../../public/assets/images/email.svg";
import { Image } from "../../atoms/image";
import { Button } from "../../atoms/button";
import LockIcon from "../../../../public/assets/images/lock.svg";
import axios from "axios";
import {
  CAPITAL_LETTER_ERROR_TEXT,
  CAPITAL_LETTER_REGEX,
  MINIMUM_LENGTH_ERROR_TEXT,
  MIN_PASSWORD_LENGTH,
  NUMBER_ERROR_TEXT,
  NUMBER_REGEX,
  SIGN_UP_TEXT,
  SMALL_LETTER_ERROR_TEXT,
  SMALL_LETTER_REGEX,
  SPECIAL_CHARACTER_ERROR_TEXT,
  SPECIAL_CHARACTER_REGEX,
  emailWarningText,
  emptyField,
  regEmail,
  regPassword,
  wrongCredentialsText,
} from "../../../utils/constants";

import {
  headerText,
  placeholderText,
  loginButton,
  emailPlaceholder,
  passwordPlaceholder,
} from "./loginContants";
import { AuthFooter } from "../SignUp";
import { useNavigate } from "react-router-dom";

export const passwordCondition = (password: string) => {
  if (password.length < MIN_PASSWORD_LENGTH) {
    return MINIMUM_LENGTH_ERROR_TEXT;
  }

  if (!CAPITAL_LETTER_REGEX.test(password)) {
    return CAPITAL_LETTER_ERROR_TEXT;
  }

  if (!SMALL_LETTER_REGEX.test(password)) {
    return SMALL_LETTER_ERROR_TEXT;
  }

  if (!NUMBER_REGEX.test(password)) {
    return NUMBER_ERROR_TEXT;
  }
  if (!SPECIAL_CHARACTER_REGEX.test(password)) {
    return SPECIAL_CHARACTER_ERROR_TEXT;
  }

  return true;
};

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailHelperText, setEmailHelperText] = useState<string>("");
  const [passwordHelperText, setPasswordHelperText] = useState<string>("");
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    setPassword(passwordValue);
    const passwordError = passwordCondition(passwordValue);
    setPasswordHelperText(
      typeof passwordError === "string" ? passwordError : ""
    );
  };

  const handleSignIn = () => {
    axios
      .post("http://localhost:9005/users/login", {
        password: password,
        email: email,
      })
      .then(async (response) => {
        const token = response.data.token;
        localStorage.setItem("accessToken", token);
        navigate("/home");
      });
  };
  return (
    <Grid
      container
      direction="column"
      maxWidth={theme.spacing(108.5)}
      rowGap={8}
      data-testid="login"
    >
      <Grid item container direction="column" rowGap={10}>
        <Grid item>
          <TypographyComponent
            variant="h1"
            color={theme.palette.textColor.highEmphasis}
          >
            {headerText}
          </TypographyComponent>
          <TypographyComponent
            variant="h3"
            color={theme.palette.textColor.lowEmphasis}
          >
            {placeholderText}
          </TypographyComponent>
        </Grid>
        <Grid item container direction="column" rowGap={5}>
          <InputField
            type="text"
            id="email"
            value={email}
            startAdornment={<Image src={emailIcon} alt="email icon" />}
            placeholder={emailPlaceholder}
            onChange={handleEmail}
            helperText={emailHelperText}
            error={!!emailHelperText}
          />
          <InputField
            type="password"
            value={password}
            startAdornment={<Image src={LockIcon} alt="password Icon" />}
            placeholder={passwordPlaceholder}
            onChange={handlePassword}
            helperText={passwordHelperText}
            error={!!passwordHelperText}
          />
          <Grid item container direction="column" rowGap={6}>
            <Button
              variant="primary"
              disabled={!(regEmail.test(email) && regPassword.test(password))}
              size="large"
              onClick={handleSignIn}
              data-testid="signIn"
            >
              {loginButton}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <AuthFooter footerLinkText={SIGN_UP_TEXT} footerText={""} />
    </Grid>
  );
};
