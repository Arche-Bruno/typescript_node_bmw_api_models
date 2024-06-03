import express from "express"
import { getDelete, getModel, getModelId, patchModel, postModel, putModel } from "../controllers/models_controllers";

const router = express.Router();


router.get("/",getModel);

router.post("/",postModel);

router.put("/:id", putModel);

router.patch("/:id", patchModel)

router.get("/:id", getModelId)
router.delete("/:id",getDelete)
export {router}