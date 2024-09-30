import express from "express";
import exphbs from "express-handlebars";
import path from "node:path";
import cookieParser from "cookie-parser";
import "dotenv/config";
import siteRouters from "./routes/site-routes.js";
import navbar from "./middlewares/navbar-middlewares.js";
import userRouters from "./routes/user-routes.js";
import { checkUser } from "./middlewares/user-middleware.js";

const PORT = process.env.PORT || 3000;
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});
const app = express();

app.use(cookieParser());
app.use(checkUser)
app.use(navbar);
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join("src", "views"));
app.use(express.urlencoded({extended: true}));
app.use(siteRouters);
app.use("/user", userRouters);

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`)
});