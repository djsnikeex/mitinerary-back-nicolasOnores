import { Router } from "express";

import {readById, readAll, readByCity}  from "../controllers/itinerary/read.js";
import create from "../controllers/itinerary/create.js";
import update from "../controllers/itinerary/update.js";
import destroy from "../controllers/itinerary/destroy.js";


let router = Router();

router.get("/", readAll);
router.get("/:id", readById);
router.get("/city/:id", readByCity);
router.post("/",create);
router.put("/:id",update);
router.delete("/:id",destroy);


export default router;

