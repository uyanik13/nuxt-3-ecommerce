export const useTimer = async (promise) => {
  const start = Date.now();
  const res = await promise;
  const end = Date.now();
  const time = end - start;
  return [time, res];
};
