export default async function customFetch(domain: string, option: any = {}) {
  const token = JSON.parse(localStorage.getItem("token") || "{}");

  const newOption = {
    ...option,
    headers: option.headers
      ? {
          ...option.headers,
          Authorization: token,
        }
      : {},
  };
  return fetch(domain, newOption).then((res) => res.json());
}
