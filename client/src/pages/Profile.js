"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
const authService_1 = require("../services/authService");
const authService_2 = require("../services/authService");
const react_router_dom_1 = require("react-router-dom");
const Profile = () => {
    const [profile, setProfile] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const fetchProfile = () => __awaiter(void 0, void 0, void 0, function* () {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const data = yield (0, authService_1.getProfile)(token);
                    setProfile(data);
                }
                catch (error) {
                    console.error(error);
                }
            }
        });
        fetchProfile();
    }, []);
    if (!(0, authService_2.isAuthenticated)()) {
        return <react_router_dom_1.Navigate to="/login"/>;
    }
    return (<div>
      {profile ? (<>
          <h1>Profile</h1>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Role: {profile.role}</p>
        </>) : (<p>Loading...</p>)}
    </div>);
};
exports.default = Profile;
