import { Router } from "express";
const siteRouters = Router();
siteRouters.get("/", (req, res) => {
  res.render("home");
});
siteRouters.get("/contacts", (req, res) => {
  res.render("contacts", {contacts: ["somewhere", "somewhere else"]});
});
siteRouters.get("/gallery", (req, res) => {
  res.render("gallery");
});
export default siteRouters;