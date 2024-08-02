import { createContext } from "react";
export const dataRendingContext = createContext();

const DataRendingContextProvider = ({children}) => {
    const {data:posts, error,fetchData} = useFetchData("/posts/posts/");use

    return ( 
        <dataRendingContext.Provider value={{
            
        }} >
            {children}
        </dataRendingContext.Provider>
     );
}
 
export default DataRendingContextProvider;