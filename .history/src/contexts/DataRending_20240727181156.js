import { createContext } from "react";
export const formContext = createContext();

const FormContextProvider = ({children}) => {
    return ( 
        <dataRendinContext.Provider value={{
            
        }} >
            {children}
        </dataRendinContext.Provider>
     );
}
 
export default DataRendingContextProvider;