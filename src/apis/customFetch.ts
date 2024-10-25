type Options = {
  method: string;
  [key: string]: any;
};
export default function customFetch(endpoint: string, options?: Options) {
  const domain = process.env.NEXT_PUBLIC_DOMAIN_API;

  const customOptions = {
    method: options?.method || "GET",
    ...options,
  };
  const res = fetch(domain + endpoint, customOptions).then((res) => res.json());
  return res;
}
