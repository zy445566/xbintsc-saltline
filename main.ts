

import { createWindow, run } from "gui";
import page from "./index.html";

const WIDTH = 1200;
const HEIGHT = 960;

const win = createWindow({ title: "saltline", width: WIDTH, height: HEIGHT });
win.setBackground("#0d141f");

win.on("close", () => console.log("gui closed"));
win.loadHTML(page);
run();
console.log("gui exited");
