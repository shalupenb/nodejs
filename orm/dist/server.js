"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_route_1 = require("./routes/category-route");
const config_1 = require("./config/config");
config_1.connection
    .sync()
    .then(() => {
    const app = (0, express_1.default)();
    const PORT = 3000;
    app.use(express_1.default.json());
    app.use("/category", category_route_1.categoryRouter);
    app.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}`));
})
    .catch((err) => {
    console.error(err);
});
