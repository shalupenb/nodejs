import { Router } from "express";
import validator from "validator";
import bcrypt from "bcrypt";
const userRouters = Router();
// userRouters.get("/signup", (req, res) => {
//   res.render("form_signup");
// });
userRouters.route("/signup").get((req, res) => {
  res.render("form_signup");
})
.post((req, res) => {
  res.cookie("user", req.body.login, {
    httpOnly: true,
    maxAge: 1000 * 60,
  });
  res.redirect("/");
});
userRouters.route("/logout").get((req, res) => {
  res.clearCookie('user');
  res.redirect("/");
});
export default userRouters;