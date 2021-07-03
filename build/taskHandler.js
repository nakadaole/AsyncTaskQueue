"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
function handleTask(task) {
    return new Promise((resolve) => {
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            console.log(`Handling task: ${task}...`);
            resolve();
        }), 2000);
    });
}
function taskHandler() {
    return __awaiter(this, void 0, void 0, function* () {
        const task = yield Utils_1.popTask();
        yield handleTask(task);
        // recursion
        yield taskHandler();
    });
}
exports.default = taskHandler;
