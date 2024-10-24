import customFetch from "./customFetch";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const authService = {
  signIn: async (input: any) => {
    const { data } = await customFetch(domain + "/auth/sign-in", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "content-type": "application/json",
      },
    });

    return data;
  },
  signOut: async () => {
    const { data } = await customFetch(domain + "/auth/sign-out");
    return data;
  },
  changeAvatar: async (file: any, username: string) => {
    console.log("formData: ", file);
    const payload = {
      username,
      file,
    };
    const { data } = await customFetch(domain + "/auth/change-avatar", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    });
    return data;
  },
  getUser: async (username: string) => {
    const { data } = await customFetch(domain + "/auth/users:" + username);
    return data;
  },
};
