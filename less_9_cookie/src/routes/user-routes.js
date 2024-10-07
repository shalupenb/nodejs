import { Router } from "express";
import { createUser, authUser } from "../middlewars/user-middleware.js";
import { users } from "../data/users.js";

const userRoutes = Router();

userRoutes.get("/", (req, res) => {
  res.json(users);
  res.end();
});

userRoutes
  .route("/signup")
  .get((req, res) => {
    res.render("form_register");
  })
  .post(createUser, (req, res) => {
    //TODO: перевірка існування body
    //валідація даних   console.log(validator.isEmail(req.body.email));
    // Хешуємо пароль console.log(bcrypt.hashSync(req.body.password, 10));
    //bcrypt.compareSync()
    // res.cookie("user", req.body.login, {
    //   httpOnly: true,
    //   maxAge: 1000 * 60 * 60,
    // });
    req.session.user = {
      login: req.body.login,
      email: req.body.email,
    };
    res.redirect("/");
  });
userRoutes.get("/signin", (req, res) => {
  res.render("form_auth");
});
userRoutes.post("/signin", authUser, (req, res) => {
  req.session.user = {
    login: req.body.login,
    //email: req.body.email,
  };
  res.redirect("/");
});
userRoutes.get("/logout", (req, res) => {
  req.session.destroy(); //знищує session
  res.redirect("/");
});
userRoutes.get("/list_of_users", (req, res) => {
  let existUsers = users?.length > 0 ? 1 : 0
  res.render("list_of_users", {users, existUsers});
});

export default userRoutes;
