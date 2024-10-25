import { InputSignIn } from "@/libs/types/account";
import customFetch from "./customFetch";

const accountService = {
  signIn: async (input: InputSignIn) => {
    const payload = {
      username: input.username,
      password: input.password,
    };
    const res = customFetch("/account/sign-in", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return res;
  },
};

export default accountService;
