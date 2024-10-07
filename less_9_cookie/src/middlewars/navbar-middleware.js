import { navbarList } from "../data/navbarList.js";
const navbar = (req, res, next) => {
  res.locals.navbarList = navbarList;
  next();
};
export default navbar;
