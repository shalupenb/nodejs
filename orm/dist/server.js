"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_https_1 = __importDefault(require("node:https"));
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
require("dotenv/config");
const config_js_1 = require("./config/config.js");
const category_route_js_1 = require("./routes/category-route.js");
const product_route_js_1 = require("./routes/product-route.js");
const user_route_js_1 = require("./routes/user-route.js");
const post_route_js_1 = require("./routes/post-route.js");
const profile_route_js_1 = require("./routes/profile-route.js");
const redis_config_js_1 = require("./config/redis-config.js");
const PORT = process.env.PORT || 443;
const run = async () => {
    await config_js_1.connection.sync({ force: true });
    console.log("DB connection successfully");
    await redis_config_js_1.clientRedis.connect();
    console.log("Redis connection successfully");
    const app = (0, express_1.default)();
    const PORT = 443;
    const options = {
        key: node_fs_1.default.readFileSync(node_path_1.default.join(__dirname, "..", "cert", "key.pem")),
        cert: node_fs_1.default.readFileSync(node_path_1.default.join(__dirname, "..", "cert", "cert.pem")),
    };
    app.use(express_1.default.json());
    app.use("/category", category_route_js_1.categoryRouter);
    app.use("/product", product_route_js_1.productRouter);
    app.use("/user", user_route_js_1.userRouter);
    app.use("/post", post_route_js_1.postRouter);
    app.use("/profile", profile_route_js_1.profileRouter);
    await node_https_1.default
        .createServer(options, app)
        .listen(PORT, () => console.log(`Server is running https://127.0.0.1`));
};
try {
    run();
}
catch (error) {
    console.log(error.message);
}
