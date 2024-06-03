import { AdicionalDetails, ModelCar } from "../interfaces/modelCard_interface";
import ModelCarModels from "../models/modelCard_models";

/*Validate additional Details*/

export const validateAdditionalDetails = (data: AdicionalDetails): boolean => {
  console.log("desde las la funcion validateAdditionalDeatils", data);

  if (
    !data.imgFrontPage ||
    !data.autonomy ||
    !data.frontPages ||
    !data.infoPresentations ||
    !data.exteriorImgs ||
    !data.chargingTimeImgs ||
    !data.interioGraph
  ) {
    return false;
  }

  return true;
};

export const patch = async (dataModel: ModelCar, id: string) => {
  const findModel = await ModelCarModels.findById({ _id: id });
  console.log(findModel);
  console.log(dataModel.isNewCar);

  let error = "type error in combustion";

  // Verificar si dataModel.combustion es uno de los valores permitidos
  if (!["electric", "gasoline"].includes(dataModel.combustion)) {
    return error;
  }

  const validateAdditionalDetailsIsOk = validateAdditionalDetails(
    dataModel.additionalDetails
  );

  if (!validateAdditionalDetailsIsOk) {
    return "validateAdditional error";
  }
  const obj: ModelCar = {
    imgCar: dataModel.imgCar || findModel?.imgCar || "",
    imgCar2: dataModel.imgCar || findModel?.imgCar || "",
    additionalDetails:
      dataModel.additionalDetails || findModel?.additionalDetails || {},
    name: dataModel.name || findModel?.name || "",
    combustion: dataModel.combustion || findModel?.combustion,
    isNewCar: dataModel.isNewCar,
  };

  const responsePatch = await ModelCarModels.findByIdAndUpdate(
    { _id: id },
    obj,
    { new: true }
  );

  return responsePatch;
};

export const get = async () => {
  const getAll = await ModelCarModels.find();
  return getAll;
};

export const post = async (dataModel: ModelCar) => {
  let nameModelCar = dataModel.name.toLowerCase(); // Convertir a minúsculas

  let notfound = await ModelCarModels.find({
    name: { $regex: new RegExp(nameModelCar, "i") },
  });

  let error = `this model alredy exist`;

  if (notfound.length > 0) return error;

  const createModel = await ModelCarModels.create(dataModel);
  return createModel;
};

export const getId = async (id: string) => {
  const getById = await ModelCarModels.findById({ _id: id });
  return getById;
};

export const put = async (dataModel: ModelCar, id: string) => {
  const createNewModel = await ModelCarModels.findOneAndUpdate(
    { _id: id },
    dataModel,
    { new: true }
  );
  return createNewModel;
};

export const deleteById = async (id: string) => {
  const objResponse = await ModelCarModels.findById({ _id: id });
  const response = await ModelCarModels.deleteOne({ _id: id });
  if (response) {
    return objResponse;
  }
  let error = "this item could not be deleted";
  return error;
};
