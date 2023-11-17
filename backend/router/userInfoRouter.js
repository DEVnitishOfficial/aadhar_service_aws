import { Router } from "express";

const router = Router();
import {submitForm, getUser} from "../controller/userInfoController.js";

router.post('/submitForm',submitForm)
router.post('/getUser',getUser)


export default router