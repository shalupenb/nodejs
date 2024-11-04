"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientRedis = void 0;
const redis_1 = require("redis");
require("dotenv/config");
exports.clientRedis = (0, redis_1.createClient)({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});
