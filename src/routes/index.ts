import express from "express"
import {readdirSync} from "fs"

export const router = express.Router();
const PATH_ROUTER = `${__dirname}`;


const cleanExtension = (path:string)=>{
   const separatePath = path.split(".").shift();
   return separatePath
}
 readdirSync(PATH_ROUTER).forEach((path)=>{
     
    const pathClean = cleanExtension(path); 

    if(pathClean&&pathClean!== "index"){
        import (`./${pathClean}`).then((moduleRouter)=>{

            router.use(`/${pathClean}`,moduleRouter.router);
            console.log(`the ${pathClean} route is loading`)
       })
    }
    
 })

