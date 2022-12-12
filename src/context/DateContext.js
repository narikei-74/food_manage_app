import { createContext, useEffect, useState } from "react";
import { storage } from "../storage/storage";
import { getDateString } from "../utils/function";

export const DateContext = createContext({ currentDate: null });

export const DateProvider = (props) => {
    const [currentDate, setCurrentDate] = useState(getDateString());

    return (
        <DateContext.Provider value={{ currentDate: currentDate, setCurrentDate: setCurrentDate }}>
            {props.children}
        </DateContext.Provider>
    )
}
