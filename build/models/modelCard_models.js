"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const InterioGraphDetailsObjSchema = new mongoose_1.Schema({
    graphImg: {
        type: String,
        required: true,
    },
    graphTitle: {
        type: String,
        required: true,
    },
    graphContent: {
        type: String,
        required: true,
    },
});
const InterioGraphDetailsObjSchema_2 = new mongoose_1.Schema({
    img: {
        type: String,
    },
    img_presentation: {
        type: String,
    },
    number: {
        type: String,
    },
    title: {
        type: String,
    },
    subtitlePresentation: {
        type: [String],
    }
});
const InterioGraphDetailsSchema = new mongoose_1.Schema({
    video: {
        type: String,
    },
    interiorTitle: {
        type: String,
        required: true,
    },
    type_model: {
        type: String,
    },
    interiorGraphContent: {
        type: [InterioGraphDetailsObjSchema],
    },
    interiorGraphContent2: {
        type: [InterioGraphDetailsObjSchema_2]
    }
});
const ChargingTimeDescriptionSchema = new mongoose_1.Schema({
    hours: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
const ChargingTimeModelSchema = new mongoose_1.Schema({
    titleBtn: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    chargingTimeDescription: {
        type: [ChargingTimeDescriptionSchema],
        required: true,
    },
});
const ChargingTimeModel_2Schema = new mongoose_1.Schema({
    img: {
        type: String,
    },
    title: {
        type: String,
    },
    subTitle: {
        type: String,
    },
    contentLists: {
        type: String,
    },
});
const detailsAditional_gasoline_contentSchema = new mongoose_1.Schema({
    img: {
        type: String,
    },
    title: {
        type: String,
    },
    content: {
        type: String
    }
});
const chargingTimeModel_gasolineSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    subContent: {
        type: String,
    },
    content: {
        type: [String],
    },
    detailsAditional_gasoline_content: [detailsAditional_gasoline_contentSchema]
});
const ChargingTimeDetailsSchema = new mongoose_1.Schema({
    titleInfo: {
        type: String,
        required: true,
    },
    type_model: {
        type: String,
    },
    chargingTimeModels: [ChargingTimeModelSchema],
    chargingTimeModels_2: [ChargingTimeModel_2Schema],
    detailsAditional_gasoline: chargingTimeModel_gasolineSchema,
});
const ModelFrontPageObjDetailsDescription = new mongoose_1.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    subContent: {
        type: String,
    },
});
const ModelFrontPageObjDetails = new mongoose_1.Schema({
    titleBtn: {
        type: String,
        required: true,
    },
    color_bg: {
        type: String,
    },
    img: {
        type: String,
        required: true,
    },
    img_presentation: {
        type: String,
    },
    description: {
        type: [ModelFrontPageObjDetailsDescription],
    },
});
const ModelFrontPageObj_2Details = new mongoose_1.Schema({
    titleBtn: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    video: {
        type: String,
    },
    img_presentation: {
        type: String,
    },
});
const ModelFrontPageObj_3Details = new mongoose_1.Schema({
    img: {
        type: String,
    },
    img_presentation: {
        type: String
    },
    number: {
        type: String,
    },
    title: {
        type: String,
    }
});
const ModelFrontPageDetails = new mongoose_1.Schema({
    type_Model: {
        type: String,
    },
    title: {
        type: String,
    },
    frontPage: {
        type: [ModelFrontPageObjDetails],
    },
    frontPage_2: {
        type: ModelFrontPageObj_2Details,
    },
    frontPage_3: {
        type: [ModelFrontPageObj_3Details]
    }
});
const ModelExteriorDetailsSchema = new mongoose_1.Schema({
    video: {
        type: String,
    },
    title: {
        type: [String],
    },
    front: {
        img: {
            type: String,
            required: true,
        },
        text: {
            type: [String],
            required: true,
        },
    },
    exterior: {
        img: {
            type: String,
            required: true,
        },
        text: {
            type: [String],
            required: true,
        },
    },
    ceiling: {
        img: {
            type: String,
        },
        text: {
            type: [String],
        },
    },
});
const ModelInfoPresentationObjSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    infoContent: {
        type: String,
        required: true,
    },
});
const ModelInfoPresentationSchema = new mongoose_1.Schema({
    infoPresentation: {
        type: [ModelInfoPresentationObjSchema],
        required: true,
    },
});
const ModelExteriorGeneralDetailsSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    img: {
        type: String,
    },
    video: {
        type: String,
    },
});
const ModelInteriorGeneralDetailsSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    img: {
        type: String,
    },
    video: {
        type: String,
    },
});
const ModelAdicionalDetailsSchema = new mongoose_1.Schema({
    title_img_frontPage: {
        type: String,
    },
    imgFrontPage: {
        type: String,
        required: true,
    },
    autonomy: {
        type: String,
        required: true,
    },
    infoPresentations: {
        type: ModelInfoPresentationSchema,
        required: true,
    },
    frontPages: {
        type: ModelFrontPageDetails,
        required: true,
    },
    exterior_generalDetails: {
        type: ModelExteriorGeneralDetailsSchema,
    },
    exteriorImgs: {
        type: ModelExteriorDetailsSchema,
    },
    chargingTimeImgs: {
        type: ChargingTimeDetailsSchema,
    },
    interior_generalDetails: {
        type: ModelInteriorGeneralDetailsSchema
    },
    interioGraph: {
        type: InterioGraphDetailsSchema,
    },
});
const ModelCarSchema = new mongoose_1.Schema({
    imgCar: {
        type: String,
        required: true,
    },
    imgCar2: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    combustion: {
        type: String,
        enum: ["electric", "gasoline", "hybrid"],
        required: true,
    },
    isNewCar: {
        type: Boolean,
        required: true,
    },
    additionalDetails: {
        type: ModelAdicionalDetailsSchema,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const ModelCarModels = (0, mongoose_1.model)("modelsCars", ModelCarSchema);
exports.default = ModelCarModels;
