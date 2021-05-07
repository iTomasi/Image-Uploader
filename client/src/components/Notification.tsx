import React, {useContext} from "react";
import "./scss/notification.scss";

// Context
import {CC_NOTIFICATION} from "../context/ContextNotification";

const Notification = () => {

    const {notification} = useContext(CC_NOTIFICATION);

    return (
        <div className={`notification notification__${notification.type} ${notification.active ? "active" : "noactive"}`}>
            {notification.msg}
        </div>
    )
};

export default Notification;