import React, {useContext} from "react";

// Components
import FormUploader from "../components/home/FormUploader";
import UploadPorcentage from "../components/home/UploadPorcentage";
import ShowImgUrl from "../components/home/ShowImgUrl";

// Context
import {CC_UPLOAD} from "../context/ContextUpload";

const Home = () => {

    const {fileInfo} = useContext(CC_UPLOAD);

    return (
        <>
        <FormUploader display={fileInfo.state === 0 ? true : false}/>
        <UploadPorcentage display={fileInfo.state === 1 ? true : false}/>
        <ShowImgUrl display={fileInfo.state === 2 ? true : false} />
        </>
    )
};

export default Home;