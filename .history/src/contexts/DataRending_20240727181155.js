import { createContext } from "react";
export const formContext = createContext();

const FormContextProvider = ({children}) => {
    return ( 
        <dataReContext.Provider value={{
            
        }} >
            {children}
        </dataReContext.Provider>
     );
}
 
export default DataRendingContextProvider;