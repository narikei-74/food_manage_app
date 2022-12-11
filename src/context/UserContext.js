import { createContext, useEffect, useState } from "react";
import { storage } from "../storage/storage";

export const UserContext = createContext({currentUser:{userId:null}});

export const UserProvider = (props) =>{
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
        storage.load({key:"userInfo"})
        .then(data=>{
          if(data.userId){
            setCurrentUser(data);
          }
        });
    },[]);

    return(
        <UserContext.Provider value={{currentUser:currentUser, setCurrentUser:setCurrentUser}}>
            {props.children}
        </UserContext.Provider>
    )
}
