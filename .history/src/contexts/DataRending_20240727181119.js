import { createContext } from "react";
export const formContext = createContext();

const FormContextProvider = ({children}) => {
    return ( 
        <datContext.Provider value={{
            
        }} >
            {children}
        </datContext.Provider>
     );
}
 
export default FormContextProvider;