import React from "react";

const SignUpButton = ({ ...props }: any) => {
  console.log("signUp button!");
  console.log(props);
};

const SignInButton = ({ ...props }: any) => {
  console.log("signIn button!");
  console.log(props);
};

export { SignUpButton, SignInButton };
