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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const taskHandler_1 = __importDefault(require("./taskHandler"));
const Client_1 = __importDefault(require("./Client"));
Client_1.default.on('connect', () => {
    console.log("Reids connected.");
});
Client_1.default.on('ready', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Redis is ready.");
    yield taskHandler_1.default();
}));
Client_1.default.on('error', e => {
    console.error(`Redis Error:${e}`);
});
