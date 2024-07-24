export const cleanupObject = (object) => {
  return Object?.entries(object)?.reduce((acc, [key, value]) => {
    if (value) return { ...acc, [key]: value };
    return { ...acc };
  }, {});
};

export const urlToSearchParams = (url, object) =>
  `${url}?${new URLSearchParams(cleanupObject(object)).toString()}`;
