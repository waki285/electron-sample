const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld(
  "preload",
  {
    helloWorld() { console.log("Hello World! (from preload.js)"); }
  }
)