import { createContext } from "react";
export const uiContext = createContext();

const UiContextProvider = ({children}) => {
    return ( 
    <uiContext.Provider value={}>
        {children}
    </uiContext.Provider> );
}
 
export default UiContextProvider;