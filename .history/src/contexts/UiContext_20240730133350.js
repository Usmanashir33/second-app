import { createContext } from "react";
export const uiContext = createContext();

const UiContextProvider = () => {
    return ( uiContext.Provider );
}
 
export default UiContextProvider;