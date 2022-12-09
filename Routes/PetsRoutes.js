import { Router } from "express";
const petsRouter = Router();
import {getPets} from "../Models/PetsMod.js";


petsRouter.get ("/", async function (req, res) {
    const result = await getPets()
    console.log("got it")
    res.json({success: true, payload: result})
    console.log(result)
})


export default petsRouter;