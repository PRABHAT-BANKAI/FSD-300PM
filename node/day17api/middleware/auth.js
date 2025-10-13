const auth = (req, res, next) => {
  console.log(req.headers.authorization.split(" ")[1]);
  return res.status(200).json({ message: "hello world " });
};

module.exports = { auth };
