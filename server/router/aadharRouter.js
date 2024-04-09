import { Router } from "express";

const router = Router();
import submitAadharForm from "../controller/aadharController.js";
import upload from "../middleware/multerMiddleware.js";

router.post('/submitAadharForm', upload.single('avatar'),submitAadharForm)


export default router