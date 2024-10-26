import { InputSignIn, InputSignUp } from "@/libs/types/account";
import customFetch from "./customFetch";

const accountService = {
  signIn: (input: InputSignIn) => {
    return customFetch("/account/sign-in", {
      method: "POST",
      body: JSON.stringify(input),
    });
  },
  signUp: (input: InputSignUp) => {
    return customFetch("/account/sign-up", {
      method: "POST",
      body: JSON.stringify(input),
    });
  },
};

export default accountService;
