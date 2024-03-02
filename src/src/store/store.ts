import React from "react";
import LoginStore from "./LoginStore";
import { UserStore } from "./UserStore";



export const stores = Object.freeze({
    loginStore : new LoginStore(),  
    userStore: new UserStore()
})

export const storeContext = React.createContext(stores)
export const StoreProvider = storeContext.Provider;