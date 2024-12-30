"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMessageSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.SendMessageSchema = zod_1.default.object({
    recipientId: zod_1.default.string(),
    message: zod_1.default.string(),
    img: zod_1.default.string().optional(),
});