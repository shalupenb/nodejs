import { Router } from "express";
const siteRouters = Router();
siteRouters.get("/", (req, res) => {
  res.render("home");
});
export default siteRouters;