export default (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return "Hello World";
};
