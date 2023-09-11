export const MIN_PASSWORD_LENGTH = 8;
export const MISMATCH_PASSWORD_TEXT = "Passwords do not match";
export const CHANGE_PASSWORD_TEXT = "Change Password";
export const CAPITAL_LETTER_ERROR_TEXT =
  "Password must contain at least one capital letter.";
export const SMALL_LETTER_ERROR_TEXT =
  "Password must contain at least one small letter.";
export const MINIMUM_LENGTH_ERROR_TEXT =
  "Password must be at least 7 characters long.";
export const NUMBER_ERROR_TEXT = "Password must contain at least one number.";
export const VALID_PASSWORD_PLACEHOLDER =
  "Password must contain at least 7 letters and 1 number";
export const CAPITAL_LETTER_REGEX = /[A-Z]/;
export const SMALL_LETTER_REGEX = /[a-z]/;
export const NUMBER_REGEX = /\d/;
export const SPECIAL_CHARACTER_REGEX = /[!@#$%^&*()_+{}[\]:;<>,.?~`]/;
export const SPECIAL_CHARACTER_ERROR_TEXT =
  "Password must contain at least one special character.";
export const regEmail =
  /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
export const regPassword =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
export const emailWarningText = `Invalid email id`;
export const passwordWarningText = `Password must contain at least 7 letters and 1 number `;
export const emptyField = `This field cannot be empty`;
export const LOGIN_TEXT = "Login";
export const SIGN_UP_TEXT = "Sign Up";
export const wrongCredentialsText = `Wrong credentials`;
