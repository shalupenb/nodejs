import { log } from "node:console";
import EventEmitter from "node:events";
const emitter = new EventEmitter();

const f1 = () => {
  log("fi1 start")
};
const f2 = () => {
  log("fi2 start")
};
const f3 = () => {
  log("fi3 start")
};

emitter.on("start", f1);
emitter.on("start", f2);
emitter.prependListener("start", f3);
//log(emititer.listeners("start"))
//log(emitter.listenerCount("start"));
// log(`Default: ${emitter.getMaxListeners()}`);
// emitter.setMaxListeners(20);
// log(`Count of listeners: ${emitter.getMaxListeners()}`);
emitter.removeAllListeners("start");
emitter.emit("start");
