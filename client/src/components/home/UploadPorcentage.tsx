import React, {useContext} from "react";
import "./scss/uploadPorcentage.scss";

// Context
import {CC_UPLOAD} from "../../context/ContextUpload"

interface IUploadPorcentageProps {
    display: boolean
}

const UploadPorcentage = ({display}: IUploadPorcentageProps) => {

    const {fileInfo} = useContext(CC_UPLOAD)

    return (
        <div className="uploadPorcentage" style={{display: display ? "block" : "none"}}>
            <h2 style={{
                color: "#4F4F4F"
            }}>Uploading... <span>({Math.round(fileInfo.progressUL)})</span></h2>

            <div className="bar">
                <div className="current" style={{width: `${fileInfo.progressUL}%`}}></div>
            </div>
        </div>
    )
};

export default UploadPorcentage;