import { createContext } from "react";
export const formContext = createContext();

const FormContextProvider = ({children}) => {
    return ( 
        <dataContext.Provider value={{
            
        }} >
            {children}
        </dataContext.Provider>
     );
}
 
export default DataRendingContextProvider;