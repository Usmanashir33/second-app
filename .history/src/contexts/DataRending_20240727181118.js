import { createContext } from "react";
export const formContext = createContext();

const FormContextProvider = ({children}) => {
    return ( 
        <Context.Provider value={{
            
        }} >
            {children}
        </Context.Provider>
     );
}
 
export default FormContextProvider;