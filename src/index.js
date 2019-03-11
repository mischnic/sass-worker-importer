// require("./worker.js");

const worker = new Worker("./worker.js");
worker.onerror = console.error;
