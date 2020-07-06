"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
//typeScript supports import
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 9000;
//declares the type of the variable to be checked
const one = 1;
const two = 2;
// null, any, boolean, other types as well
app.get("/", (req, res) => res.send(`1 + 2 = ${one + two}`));
app.listen(port);
console.log(`[app]: http://localhost:${port}`);
