import React, {useState, createContext} from "react";
import config from "../config/config";
import Axios from "axios";

const CC_UPLOAD: any = createContext(null);

const ContextUpload = ({children}: any) => {
    const [fileInfo, setFileInfo] = useState<any>({
        progressUL: 0,
        state: 0,
        uploaded: false,
        fileUrl: ""
    });

    const uploadingFile = async (file: any) => {

        const formData = new FormData();
        // if you will use node backend remove 'file' to 'theImg'
        formData.append("file", file);

        // remove this line if you will use node backend
        formData.append("upload_preset", config.HOST.CLOUDINARY_PRESET)

        setFileInfo((prev: any) => ({...prev, state: 1}));
        
        // put config.HOST.BACK_END + "/upload" if you will use node backend

        const res = await Axios.post(config.HOST.BACK_END, formData, {
            headers: {"Content-Type": "multipart/form-data"},
            onUploadProgress: e => {
                const getPorcentage = (e.loaded * 100) / e.total;

                setFileInfo((prev: any) => ({...prev, progressUL: getPorcentage}))
            }
        });

        setFileInfo((prev: any) => ({...prev, state: 2, uploaded: res.status, fileUrl: res.data.url}));
        
    }

    return (
        <CC_UPLOAD.Provider value={{
            fileInfo, uploadingFile
        }}>
            {children}
        </CC_UPLOAD.Provider>
    )
};

export {CC_UPLOAD, ContextUpload}