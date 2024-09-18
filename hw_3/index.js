import { log } from "node:console";
import EventEmitter from "node:events";

const emitter = new EventEmitter();

//#region 1

emitter.on('click', () => {
    log('click 1');
});

emitter.on('click', () => {
    log('click 2');
});

emitter.on('click', () => {
    log('click 3');
});


emitter.emit('click');
//#endregion

log("=================================");

//#region 2

const handler1 = () => {
  log('error 1');
};

const handler2 = () => {
  log('error 2');
};

const handler3 = () => {
  log('error 3');
};

emitter.on('error', handler1);
emitter.on('error', handler2);
emitter.on('error', handler3);

emitter.off('error', handler2);

emitter.emit('error');
//#endregion

log("=================================");

//#region 3

class Dice{
  #_dice_emitter = new EventEmitter();
  constructor() {
    this.#_dice_emitter.on('rolled', (result) => {
      log(`Rolled: ${result}`);
    });
  }
  roll() {
      const result = Math.floor(Math.random() * 6) + 1;
      this.#_dice_emitter.emit('rolled', result);
  }
}

const dice = new Dice();

dice.roll();
dice.roll();
dice.roll();
//#endregion

log("=================================");

//#region 4

class Logger{
  #_log_emitter = new EventEmitter();

  sub_for_info() {
    this.#_log_emitter.on('info', (message) => {
      log(`Information: ${message}`);
    });
  }

  sub_for_warn() {
    this.#_log_emitter.on('warn', (message) => {
      log(`Warning: ${message}`);
    });
  }

  sub_for_error() {
    this.#_log_emitter.on('error', (message) => {
      log(`Error: ${message}`);
    });
  }

  info(message) {
    this.#_log_emitter.emit('info', message);
  }

  warn(message) {
    this.#_log_emitter.emit('warn', message);
  }

  error(message) {
    this.#_log_emitter.emit('error', message);
  }
}

const logg = new Logger();

logg.sub_for_error();
logg.sub_for_info();
logg.sub_for_warn();

logg.info('information log');
logg.warn('warning log');
logg.error('error log');
//#endregion