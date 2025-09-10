const auth = (req, res, next) => {

  let {email}= req.body

  if (email == "batman@gmail.com") {
    next();
  } else {
    res.send("unauthorized");
  }
};

export { auth };
