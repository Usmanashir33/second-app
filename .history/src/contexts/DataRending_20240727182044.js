import { createContext } from "react";
import useFetchData from "../hooks/fetchData";
export const dataRendingContext = createContext();

const DataRendingContextProvider = ({children}) => {
    const {data:posts, error,fetchData} = useFetchData();

    return ( 
        <dataRendingContext.Provider value={{
            
        }} >
            {children}
        </dataRendingContext.Provider>
     );
}
 
export default DataRendingContextProvider;