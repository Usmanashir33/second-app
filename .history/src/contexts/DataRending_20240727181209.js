import { createContext } from "react";
export const formContext = createContext();

const DataRendingContextProvider = ({children}) => {
    return ( 
        <dataRendingContext.Provider value={{
            
        }} >
            {children}
        </dataRendingContext.Provider>
     );
}
 
export default DataRendingContextProvider;