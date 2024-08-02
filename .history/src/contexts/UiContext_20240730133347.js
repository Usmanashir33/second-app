import { createContext } from "react";
export const uiContext = createContext();

const UiContextProvider = () => {
    return ( uiContext );
}
 
export default UiContextProvider;