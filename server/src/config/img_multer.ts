import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, `img-${Date.now()}${path.extname(file.originalname)}`)
    },

    destination: path.join(__dirname, "../../public")
});

export default multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/gif" || file.mimetype === "image/svg+xml") {
            return cb(null, true);
        }

        return cb(null, false)
    }
}).single("theImg")