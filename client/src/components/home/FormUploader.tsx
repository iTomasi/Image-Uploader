import React, {useState, useContext} from "react";
import uploadIcon from "../../uploadicon.png";
import "./scss/formUploader.scss";

// Context
import {CC_UPLOAD} from "../../context/ContextUpload";
import {CC_NOTIFICATION} from "../../context/ContextNotification";

interface IFormUploaderProps {
    display: boolean;
}

const FormUploader = ({display}: IFormUploaderProps) => {
    const {uploadingFile} = useContext(CC_UPLOAD);
    const {showNotification} = useContext(CC_NOTIFICATION);

    const [dragDashedColor, setDragDashedColor] = useState<string>("#97BEF4");

    

    const handleInputFile = (e: any) => {
        const getFile = e.currentTarget.files[0];

        try {
            if (getFile.type === "image/jpeg" || getFile.type === "image/png" || getFile.type === "image/gif" || getFile.type === "image/svg+xml") {
                uploadingFile(getFile);
                return
            }
    
            showNotification("error", "This file is not img")
        }

        catch(e) {
            console.log("DoU")
        }
    }

    const handleDragFileOver = (e: any) => {
        e.preventDefault();
        setDragDashedColor("#000000")
    }

    const handleDragFileLeave = (e: any) => {
        e.preventDefault();
        setDragDashedColor("#97BEF4")
    }

    const handleFileDrop = (e: any) => {
        e.preventDefault();
        const getFile = e.dataTransfer.files[0];
        
        if (getFile.type === "image/jpeg" || getFile.type === "image/png" || getFile.type === "image/gif" || getFile.type === "image/svg+xml") {
            uploadingFile(getFile);
            return
        }

        showNotification("error", "This file is not img")
    }

    return (
        <form style={{display: display ? "flex" : "none"}}>
            <h2 style={{
                color: "#4F4F4F",
                marginBottom: "20px"
            }}>Upload your image</h2>

            <h4 style={{
                color: "#828282",
                marginBottom: "30px"
            }}>File should be Jpeg, Png...</h4>

            <div className="dragFile" onDragOver={handleDragFileOver} onDragLeave={handleDragFileLeave} onDrop={handleFileDrop} style={{border: `2px dashed ${dragDashedColor}`}}>
                <img src={uploadIcon} alt="upload Icon"/>
                <h3 style={{color: "#BDBDBD"}}>Drag & Drop your image here</h3>
            </div>

            <h3 className="or" style={{color: "#BDBDBD"}}>Or</h3>

            <label htmlFor="inputFile">Choose a file</label>
            <input id="inputFile" type="file" style={{display: "none"}} onChange={handleInputFile}/>
        </form>
    )
};

export default FormUploader;