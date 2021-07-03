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
const Utils_1 = require("./Utils");
const Client_1 = __importDefault(require("./Client"));
Client_1.default.on('ready', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Utils_1.delRedisKey(Utils_1.TASK_NAME);
        for (let i = Utils_1.TASK_AMOUNT; i > 0; i--) {
            yield Client_1.default.lpush(Utils_1.TASK_NAME, `task-${i}`);
        }
        // callback
        Client_1.default.lrange(Utils_1.TASK_NAME, 0, Utils_1.TASK_AMOUNT, (err, reply) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                throw new Error(err.message);
            }
            console.log(reply);
            process.exit();
        }));
    }
    catch (error) {
        console.error(error);
    }
}));
