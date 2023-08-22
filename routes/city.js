import { Router } from "express";
import  {read, readOne}  from "../controllers/cities/read.js";
import create from "../controllers/cities/create.js";
import update from "../controllers/cities/update.js";
import destroy from "../controllers/cities/destroy.js";

let router = Router();


/* GET home page. */
router.get("/", read);
router.get("/:id", readOne);
router.post("/",create);
router.put("/:id",update);
router.delete("/:id",destroy);




export default router;
