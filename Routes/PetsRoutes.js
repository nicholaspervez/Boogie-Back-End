import { Router } from "express";
const petsRoutes = Router();
import {getPets} from "../Models/PetsMod.js";


petsRoutes.get ("/", async function (req, res) {
    const result = await getPets()
    console.log("got it")
    res.json({success: true, payload: result})
    console.log(result)
})


export default petsRoutes;