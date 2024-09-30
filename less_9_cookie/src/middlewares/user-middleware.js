export const checkUser = (req, res, next) => {
  if(req.cookies && req.cookies.user) {
    res.locals.user = req.cookies.user;
  }
  next();
};