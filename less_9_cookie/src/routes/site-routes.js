import { Router } from "express";
const siteRoutes = Router();

siteRoutes.get("/", (req, res) => {
  res.render("home");
});

export default siteRoutes;
