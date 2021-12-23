export const useGetMedia = () => {
  const config = useRuntimeConfig();

  const getMedia = function (url) {
    if (url.startsWith("/")) {
      return `${config.STORE_URL}${url}`;
    }
    return url;
  };

  return {
    getMedia,
  };
};
