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
exports.getDelete = exports.patchModel = exports.getModelId = exports.putModel = exports.postModel = exports.getModel = void 0;
const modelCar_services_1 = require("../services/modelCar_services");
const getModel = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataAllModel = yield (0, modelCar_services_1.get)();
        if (dataAllModel.length === 0) {
            res.status(200).json([]);
        }
        res.status(200).send(dataAllModel);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getModel = getModel;
const getModelId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const model = yield (0, modelCar_services_1.getId)(id);
        res.status(200).json(model);
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.getModelId = getModelId;
const postModel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataModel = req.body;
        const modelCreated = yield (0, modelCar_services_1.post)(dataModel);
        if (modelCreated === "this model alredy exists") {
            res.status(400).json({ message: `${modelCreated} ${dataModel.name}` });
            return;
        }
        res.status(200).send(modelCreated);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.postModel = postModel;
//
const putModel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { imgCar, imgCar2, name, combustion, isNewCar, additionalDetails } = req.body;
    if (!imgCar || !name || !combustion || !isNewCar || !imgCar2) {
        const validateAdditionalDetailsIsOk = (0, modelCar_services_1.validateAdditionalDetails)(additionalDetails);
        if (!validateAdditionalDetailsIsOk) {
            res.status(400).json("all data is required");
            return;
        }
    }
    const { id } = req.params;
    const newObj = yield (0, modelCar_services_1.put)({ imgCar, additionalDetails, imgCar2, name, combustion, isNewCar }, id);
    console.log(newObj);
    try {
        res.status(200).json(newObj);
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.putModel = putModel;
const patchModel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { imgCar, imgCar2, name, combustion, additionalDetails, isNewCar } = req.body;
    const { id } = req.params;
    if (!imgCar && !name && !combustion && !isNewCar && !additionalDetails) {
        res.status(400).json({ message: "at least fill out one field" });
    }
    const getNewData = yield (0, modelCar_services_1.patch)({
        imgCar,
        imgCar2,
        name,
        combustion,
        additionalDetails,
        isNewCar,
    }, id);
    if (getNewData === "type error in combustion") {
        res.status(500).json({ message: "error type" });
        return;
    }
    try {
        res.status(200).json(getNewData);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.patchModel = patchModel;
const getDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const responseDelete = yield (0, modelCar_services_1.deleteById)(id);
        if (responseDelete === "this item could not be deleted") {
            res.status(500).json({ message: "this item could not be deleted" });
        }
        res.status(200).json({ message: `deleted Article ${responseDelete}` });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getDelete = getDelete;
