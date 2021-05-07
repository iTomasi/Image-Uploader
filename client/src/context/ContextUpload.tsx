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
        formData.append("theImg", file);

        setFileInfo((prev: any) => ({...prev, state: 1}));
        
        const res = await Axios.post(config.HOST.BACK_END + "/upload", formData, {
            onUploadProgress: e => {
                const getPorcentage = (e.loaded * 100) / e.total;

                setFileInfo((prev: any) => ({...prev, progressUL: getPorcentage}))
            }
        });

        setFileInfo((prev: any) => ({...prev, state: 2, uploaded: res.data.uploaded, fileUrl: res.data.url}));
        
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