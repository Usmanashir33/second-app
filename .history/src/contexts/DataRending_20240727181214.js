import { createContext } from "react";
export const dContext = createContext();

const DataRendingContextProvider = ({children}) => {
    return ( 
        <dataRendingContext.Provider value={{
            
        }} >
            {children}
        </dataRendingContext.Provider>
     );
}
 
export default DataRendingContextProvider;