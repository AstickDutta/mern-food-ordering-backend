import express from "express";
const router = express.Router();


import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from './../middleware/auth';
import { validationMyUserReqest } from "../middleware/validation";

router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrenctUser);
router.put(
    "/",
    jwtCheck,
    jwtParse,
    validationMyUserReqest,
    MyUserController.updateCurrentUser
  );


export default router