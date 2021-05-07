import {Router} from "express";
import img_multer from "../config/img_multer";
import {POST_uploadImg, GET_image, GET_welcome} from "../controllers/pages.controllers";

const router = Router();

router.get("/", GET_welcome);
router.post("/upload", img_multer, POST_uploadImg);
router.get("/img/:file", GET_image);


export default router;

