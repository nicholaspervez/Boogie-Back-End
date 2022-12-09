import { Router } from "express";
const ownersRouter = Router();
import { getOwners } from "../Models/OwnersMod.js";


ownersRouter.get ("/", async function (req, res) {
    const result = await getOwners()
    console.log("got it")
    res.json({success: true, payload: result})
    console.log(result)
})


export default ownersRouter;