import { createContext } from "react";
export const uiContext = createContext();

const UiContextProvider = ({c}) => {
    return ( <uiContext.Provider value={

    }>

    </uiContext.Provider> );
}
 
export default UiContextProvider;