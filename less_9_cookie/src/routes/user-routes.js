import { Router } from "express";
import { createUser, authUser } from "../middlewars/user-middleware.js";
import { users } from "../data/users.js";
import path from "node:path";
import multer from "multer";
import nodemailer from "nodemailer";

const storage = multer.diskStorage({
  destination: 'files/',
  filename: (req, file, cb) => {
    cb(null, req.body.login + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

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
  .post(upload.single("file"), createUser, (req, res) => {
    console.log(req.file);
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
      mime: path.extname(req.file.originalname),
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
    mime: path.extname(req.file.originalname),
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
userRoutes.route("/feedback")
.get((req, res) => {
  res.render("feedback");
})
.post((req, res) => {
  let trans = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "email",
      pass: PASS,
    },
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2",
    },
  });
  let mailOpt = {
    from: "Natalya Babenko <email>",
    to: data.email,
    subject: "New message",
    text: data.message,
  };
})

export default userRoutes;
