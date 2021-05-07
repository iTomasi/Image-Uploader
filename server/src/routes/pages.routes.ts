import {Router} from "express";
import img_multer from "../config/img_multer";
import {POST_uploadImg, GET_image} from "../controllers/pages.controllers";

const router = Router();

router.post("/upload", img_multer, POST_uploadImg);
router.get("/img/:file", GET_image);


export default router;

