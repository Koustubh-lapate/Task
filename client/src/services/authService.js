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
exports.isAuthenticated = exports.getProfile = exports.login = exports.register = void 0;
const api_1 = __importDefault(require("./api"));
const register = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api_1.default.post('/users/register', userData);
    return response.data;
});
exports.register = register;
const login = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api_1.default.post('/users/login', userData);
    return response.data;
});
exports.login = login;
const getProfile = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api_1.default.get('/users/profile', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
});
exports.getProfile = getProfile;
const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
};
exports.isAuthenticated = isAuthenticated;
