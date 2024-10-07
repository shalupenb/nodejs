import { users } from "../data/users.js";
import bcrypt from "bcrypt";
export const checkUser = (req, res, next) => {
  if (req.session && req.session.user) {
    const { login, email } = req.session.user;
    res.locals.user = login;
    res.locals.email = email;
  }
  next();
};

export const createUser = (req, res, next) => {
  if (
    req.body &&
    req.body.answer &&
    req.body.login &&
    req.body.email &&
    req.body.password &&
    req.body.confirm_password &&
    req.body.password === req.body.confirm_password
  ) {
    const { login, email, password } = req.body;
    const user = users.find((el) => el.login === login || el.email === email);
    if (!user) {
      users.push({
        id: users.length + 1,
        login: login,
        email: email,
        password: bcrypt.hashSync(password, 10),
      });
      next();
      return;
    }
  }
  res.status(400);
  res.redirect("/");
};

export const authUser = (req, res, next) => {
  if (req.body && req.body.answer && req.body.login && req.body.password) {
    const { login, password } = req.body;
    const user = users.find((el) => el.login === login || el.email === login);
    if (user && bcrypt.compareSync(password, user.password)) {
      next();
      return;
    }
    res.status(400);
    res.redirect("/");
  }
};
