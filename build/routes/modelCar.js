"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const models_controllers_1 = require("../controllers/models_controllers");
const router = express_1.default.Router();
exports.router = router;
router.get("/", models_controllers_1.getModel);
router.post("/", models_controllers_1.postModel);
router.put("/:id", models_controllers_1.putModel);
router.patch("/:id", models_controllers_1.patchModel);
router.get("/:id", models_controllers_1.getModelId);
router.delete("/:id", models_controllers_1.getDelete);
