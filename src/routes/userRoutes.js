"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.post('/register', userController_1.registerUser);
router.post('/login', userController_1.authUser);
router.get('/profile', authMiddleware_1.protect, userController_1.getUserProfile);
router.get('/admin', authMiddleware_1.protect, authMiddleware_1.admin, (req, res) => res.send('Admin route'));
exports.default = router;
