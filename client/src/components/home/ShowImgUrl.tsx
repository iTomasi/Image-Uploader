import React, {useContext} from "react";
import "./scss/showImgUrl.scss";

// Context
import {CC_UPLOAD} from "../../context/ContextUpload";

interface IShowImgUrlProps {
    display: boolean
}

const ShowImgUrl = ({display}: IShowImgUrlProps) => {

    const {fileInfo} = useContext(CC_UPLOAD);

    const handleButtonCopyClipBoard = () => {
        navigator.clipboard.writeText(fileInfo.fileUrl);
    }

    return (
        <div className="showImgUrl" style={{display: display ? "flex" : "none"}}>
            {
                fileInfo.uploaded
                ? <i className="i__check fas fa-check-circle"></i>
                : <i className="i__times fas fa-times-circle"></i>
            }
            <h2>
                {
                    fileInfo.uploaded
                    ? "Uploaded Successfully"
                    : "Error"
                }
            </h2>
            <img src={fileInfo.fileUrl} alt="Img"/>

            <div className="clipBoard">
                <input id="inputUrl" type="text" value={fileInfo.fileUrl} disabled/>
                <button type="button" onClick={handleButtonCopyClipBoard}>Copy Link</button>
            </div>
        </div>
    )
};

export default ShowImgUrl;