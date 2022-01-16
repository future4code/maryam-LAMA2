import express from "express"
import { ShowController } from "../controller/ShowController"

export const showRouter = express.Router()

const showController = new ShowController()

showRouter.put("/create", showController.createShow)
showRouter.get("/getShowsByWeekDay", showController.getShowsByWeekDay)
