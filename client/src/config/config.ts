const cloudinaryURL: any = process.env.REACT_APP_CLOUDINARY_URL;
const cloudinaryPreset: any = process.env.REACT_APP_CLOUDINARY_PRESET;

// if you will use node backend put in the BACK_END "http://localhost:4000"

// eslint-disable-next-line
export default {
    HOST: {
        BACK_END: cloudinaryURL,
        CLOUDINARY_PRESET: cloudinaryPreset
    }
}