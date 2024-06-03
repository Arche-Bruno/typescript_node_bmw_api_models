import { Request, Response } from "express";
import {
  deleteById,
  get,
  getId,
  patch,
  post,
  put,
  validateAdditionalDetails,
} from "../services/modelCar_services";

const getModel = async (_req: Request, res: Response): Promise<void> => {
  try {
    const dataAllModel = await get();

    if (dataAllModel.length === 0) {
      res.status(200).json([]);
    }

    res.status(200).send(dataAllModel);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getModelId = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const model = await getId(id);

    res.status(200).json(model);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const postModel = async (req: Request, res: Response): Promise<void> => {
  try {
    const dataModel = req.body;
    const modelCreated = await post(dataModel);

    if (modelCreated === "this model alredy exists") {
      res.status(400).json({ message: `${modelCreated} ${dataModel.name}` });

      return;
    }
    res.status(200).send(modelCreated);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//

const putModel = async (req: Request, res: Response) => {
  const { imgCar, imgCar2, name, combustion, isNewCar, additionalDetails } =
    req.body;
  if (!imgCar || !name || !combustion || !isNewCar || !imgCar2) {
    const validateAdditionalDetailsIsOk =
      validateAdditionalDetails(additionalDetails);
    if (!validateAdditionalDetailsIsOk) {
      res.status(400).json("all data is required");
      return;
    }
  }

  const { id } = req.params;

  const newObj = await put(
    { imgCar, additionalDetails, imgCar2, name, combustion, isNewCar },
    id
  );

  console.log(newObj);

  try {
    res.status(200).json(newObj);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const patchModel = async (req: Request, res: Response) => {
  const { imgCar, imgCar2, name, combustion, additionalDetails, isNewCar } =
    req.body;

  const { id } = req.params;

  if (!imgCar && !name && !combustion && !isNewCar && !additionalDetails) {
    res.status(400).json({ message: "at least fill out one field" });
  }
  const getNewData = await patch(
    {
      imgCar,
      imgCar2,
      name,
      combustion,
      additionalDetails,
      isNewCar,
    },
    id
  );

  if (getNewData === "type error in combustion") {
    res.status(500).json({ message: "error type" });
    return;
  }

  try {
    res.status(200).json(getNewData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const responseDelete = await deleteById(id);
    if (responseDelete === "this item could not be deleted") {
      res.status(500).json({ message: "this item could not be deleted" });
    }

    res.status(200).json({ message: `deleted Article ${responseDelete}` });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export { getModel, postModel, putModel, getModelId, patchModel, getDelete };
