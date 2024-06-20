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
exports.deleteById = exports.put = exports.getId = exports.post = exports.get = exports.patch = exports.validateAdditionalDetails = void 0;
const modelCard_models_1 = __importDefault(require("../models/modelCard_models"));
/*Validate additional Details*/
const validateAdditionalDetails = (data) => {
    console.log("desde las la funcion validateAdditionalDeatils", data);
    if (!data.imgFrontPage ||
        !data.autonomy ||
        !data.frontPages ||
        !data.infoPresentations ||
        !data.exteriorImgs ||
        !data.chargingTimeImgs ||
        !data.interioGraph) {
        return false;
    }
    return true;
};
exports.validateAdditionalDetails = validateAdditionalDetails;
const patch = (dataModel, id) => __awaiter(void 0, void 0, void 0, function* () {
    const findModel = yield modelCard_models_1.default.findById({ _id: id });
    console.log(findModel);
    console.log(dataModel.isNewCar);
    let error = "type error in combustion";
    // Verificar si dataModel.combustion es uno de los valores permitidos
    if (!["electric", "gasoline"].includes(dataModel.combustion)) {
        return error;
    }
    const validateAdditionalDetailsIsOk = (0, exports.validateAdditionalDetails)(dataModel.additionalDetails);
    if (!validateAdditionalDetailsIsOk) {
        return "validateAdditional error";
    }
    const obj = {
        imgCar: dataModel.imgCar || (findModel === null || findModel === void 0 ? void 0 : findModel.imgCar) || "",
        imgCar2: dataModel.imgCar || (findModel === null || findModel === void 0 ? void 0 : findModel.imgCar) || "",
        additionalDetails: dataModel.additionalDetails || (findModel === null || findModel === void 0 ? void 0 : findModel.additionalDetails) || {},
        name: dataModel.name || (findModel === null || findModel === void 0 ? void 0 : findModel.name) || "",
        combustion: dataModel.combustion || (findModel === null || findModel === void 0 ? void 0 : findModel.combustion),
        isNewCar: dataModel.isNewCar,
    };
    const responsePatch = yield modelCard_models_1.default.findByIdAndUpdate({ _id: id }, obj, { new: true });
    return responsePatch;
});
exports.patch = patch;
const get = () => __awaiter(void 0, void 0, void 0, function* () {
    const getAll = yield modelCard_models_1.default.find();
    return getAll;
});
exports.get = get;
const post = (dataModel) => __awaiter(void 0, void 0, void 0, function* () {
    let nameModelCar = dataModel.name.toLowerCase(); // Convertir a minúsculas
    let notfound = yield modelCard_models_1.default.find({
        name: { $regex: new RegExp(nameModelCar, "i") },
    });
    let error = `this model alredy exist`;
    if (notfound.length > 0)
        return error;
    const createModel = yield modelCard_models_1.default.create(dataModel);
    return createModel;
});
exports.post = post;
const getId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const getById = yield modelCard_models_1.default.findById({ _id: id });
    return getById;
});
exports.getId = getId;
const put = (dataModel, id) => __awaiter(void 0, void 0, void 0, function* () {
    const createNewModel = yield modelCard_models_1.default.findOneAndUpdate({ _id: id }, dataModel, { new: true });
    return createNewModel;
});
exports.put = put;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const objResponse = yield modelCard_models_1.default.findById({ _id: id });
    const response = yield modelCard_models_1.default.deleteOne({ _id: id });
    if (response) {
        return objResponse;
    }
    let error = "this item could not be deleted";
    return error;
});
exports.deleteById = deleteById;
