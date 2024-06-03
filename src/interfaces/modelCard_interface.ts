export type CombustionType = "electric" | "gasoline"| "hybrid";

export interface ModelCar {
  imgCar: string;
  imgCar2: string;
  name: string;
  combustion: CombustionType;
  isNewCar: boolean;
  additionalDetails: AdicionalDetails;
}

export interface AdicionalDetails {
  title_img_frontPage:string
  imgFrontPage: string;
  autonomy: string;
  infoPresentations: infoPresentationDetails;
  frontPages: FrontPageDetails;
  exteriorImgs: ExteriorDetails;
  exterior_generalDetails:Exterior_generalDetails;
  chargingTimeImgs: ChargingTimeDetails;
  interior_generalDetails:Interior_generalDetails,
  interioGraph:InterioGraphDetails;
}

export interface infoPresentationDetails{
    infoPresentation:{
      title:string,
      infoContent:string,
    }[],
}
export interface descriptionFrontPageDetails{
  title:string,
  content: string
  subContent: string
}

export interface FrontPageDetails {
  type_Model:string
  title:string
  frontPage: {
    color_bg:string,
    titleBtn: string;
    img: string;
    img_presentation:string;
    description: descriptionFrontPageDetails[];
  }[];
  frontPage_2: {
    titleBtn: string;
    video: string;
    description:string,
    img_presentation:string;
    
  };
  frontPage_3:DesignPage[];
}

export interface DesignPage{
  img:string,
  img_presentation:string
  number:string,
  title:string
  subtitlePresentation:string[]
}
export interface Exterior_generalDetails{
  title:string,
  img:string,
  video:string,
}
export interface ExteriorDetails {
  video:string,
  title:string[],

  
  front: {
    img: string;
    text: string[];
  };
  exterior: {
    img: string;
    text: string[];
  };
  ceiling: {
    img: string;
    text: string[];
  };
}

export interface ChargingTimeDetails {
  titleInfo: string;
  type_model:string,
  chargingTimeModels: {

    titleBtn: string;
    time: string;
    img: string;
    chargingTimeDescription: {
      hours:string,
      description:string   
    }[];
  }[];

    chargingTimeModels_2:{
      img:string
      title:string,
      subTitle:string,
      contentLists:string,
      
    }[];

    detailsAditional_gasoline: {
     title:string,
     subContent:string,
     content:string[],
     detailsAditional_gasoline_content:{
      img:string,
      title:string,
      content:string,
    }[];
    }
 
}
export interface Interior_generalDetails{
  title:string,
  img:string,
  video:string,
}
export interface DesingPageInterior extends DesignPage {}

export interface InterioGraphDetails {
  video: string;
  interiorTitle: string;
  type_model:string
  interiorGraphContent: {
    graphImg: string;
    graphTitle: string;
    graphContent: string;
  }[];
  interiorGraphContent2: DesingPageInterior[];
}

