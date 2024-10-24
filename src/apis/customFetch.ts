type Options = {
  method?: string;
};
export default function customFetch(endpoint: string, options?: Options) {
  const domain = "";
  const customOptions = {
    method: options?.method || "GET",
    ...options,
  };
  const res = fetch(domain + endpoint, customOptions);
  return res;
}
