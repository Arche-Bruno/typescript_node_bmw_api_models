import { Schema, model } from "mongoose";
import {
  ModelCar,
  AdicionalDetails,
  ExteriorDetails,
  FrontPageDetails,
  ChargingTimeDetails,
  InterioGraphDetails,
  infoPresentationDetails,
  DesignPage,

} from "../interfaces/modelCard_interface";


const InterioGraphDetailsObjSchema = new Schema({
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
const InterioGraphDetailsObjSchema_2= new Schema<DesignPage>({
     img:{
      type:String,
     },
     img_presentation:{
      type:String,
     },
     number:{
      type:String,
     },
     title:{
      type:String,
     },
     subtitlePresentation:{
      type:[String],
     }
}) 
const InterioGraphDetailsSchema = new Schema<InterioGraphDetails>({
  video: {
    type: String,
  },
  interiorTitle: {
    type: String,
    required: true,
  },
  type_model:{
    type:String,
  },
  interiorGraphContent: {
    type: [InterioGraphDetailsObjSchema],
   
  },
  interiorGraphContent2:{
    type: [InterioGraphDetailsObjSchema_2]
  }

});
const ChargingTimeDescriptionSchema = new Schema({
  hours: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const ChargingTimeModelSchema = new Schema({
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

const ChargingTimeModel_2Schema = new Schema({
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
const detailsAditional_gasoline_contentSchema = new Schema({
  img:{
    type:String,
  },
  title:{
    type:String,
  },
  content:{
    type:String
  }
})
const chargingTimeModel_gasolineSchema = new Schema({
  title:{
    type:String,
  },
  subContent:{
    type:String,
  } ,
  content:{
    type:[String],
  },
  detailsAditional_gasoline_content:[detailsAditional_gasoline_contentSchema]
})
const ChargingTimeDetailsSchema = new Schema<ChargingTimeDetails>({
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

const ModelFrontPageObjDetailsDescription = new Schema({
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
const ModelFrontPageObjDetails = new Schema({
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

const ModelFrontPageObj_2Details = new Schema({
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

const ModelFrontPageObj_3Details = new Schema<DesignPage>({
  img:{
    type:String,
  },
  img_presentation:{
    type:String
  },
  number:{
    type:String,

  },
  title:{
    type:String,
  }
})
const ModelFrontPageDetails = new Schema<FrontPageDetails>({
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
  frontPage_3:{
    type: [ModelFrontPageObj_3Details]
  }
});

const ModelExteriorDetailsSchema = new Schema<ExteriorDetails>({
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
const ModelInfoPresentationObjSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  infoContent: {
    type: String,
    required: true,
  },
});
const ModelInfoPresentationSchema = new Schema<infoPresentationDetails>({
  infoPresentation: {
    type: [ModelInfoPresentationObjSchema],
    required: true,
  },
});

const ModelExteriorGeneralDetailsSchema = new Schema({
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
const ModelInteriorGeneralDetailsSchema = new Schema({
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
const ModelAdicionalDetailsSchema = new Schema<AdicionalDetails>({
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
  interior_generalDetails:{
    type:ModelInteriorGeneralDetailsSchema
  },
  interioGraph: {
    type: InterioGraphDetailsSchema,
  },
});

const ModelCarSchema = new Schema<ModelCar>(
  {
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
      enum: ["electric", "gasoline","hybrid"],
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ModelCarModels = model("modelsCars", ModelCarSchema);
export default ModelCarModels;
