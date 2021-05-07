import React, {useState, useEffect, createContext} from "react";

const CC_NOTIFICATION: any = createContext(null);

const ContextNotification = ({children}: any) => {
    const [notification, setNotification] = useState<any>({
        type: "",
        msg: "",
        active: false
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            setNotification((prev: any) => (
                {
                    ...prev,
                    active: false
                }
            ))
        }, 3000);

        return () => clearTimeout(timeout);
    }, [notification])

    const showNotification = (type: string, msg: string) => {
        setNotification((prev: any) => (
            {
                ...prev,
                type,
                msg,
                active: true
            }
        ))
    }

    return (
        <CC_NOTIFICATION.Provider value={{
            notification, showNotification
        }}>
            {children}
        </CC_NOTIFICATION.Provider>
    )
};

export {CC_NOTIFICATION, ContextNotification};