type Options = {
  method: string;
  [key: string]: any;
};
export default async function customFetch(endpoint: string, options?: Options) {
  const domain = process.env.NEXT_PUBLIC_DOMAIN_API;

  const customOptions = {
    method: options?.method || "GET",
    headers: options?.headers || {
      "content-type": "application/json",
    },
    ...options,
  };

  try {
    const res = await fetch(domain + endpoint, customOptions).then((res) =>
      res.json()
    );
    return res;
  } catch (error) {
    console.log("Call api fail", error);
    return false;
  }
}
