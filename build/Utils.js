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
exports.TASK_AMOUNT = exports.TASK_NAME = exports.popTask = exports.delRedisKey = exports.setRedisValue = exports.getRedisValue = void 0;
const Client_1 = __importDefault(require("./Client"));
const getRedisValue = (key) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const reply = yield Client_1.default.get(key);
            resolve(reply);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.getRedisValue = getRedisValue;
const setRedisValue = (key, value) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const reply = yield Client_1.default.set(key, value);
            resolve(reply);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.setRedisValue = setRedisValue;
const delRedisKey = (key) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const reply = yield Client_1.default.del(key);
            resolve(reply);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.delRedisKey = delRedisKey;
const popTask = () => new Promise(resolve => Client_1.default.blpop(exports.TASK_NAME, 1000, (err, reply) => resolve(reply[1])));
exports.popTask = popTask;
exports.TASK_NAME = "localTask1";
exports.TASK_AMOUNT = 20;
