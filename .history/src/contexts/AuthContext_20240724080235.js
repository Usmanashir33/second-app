import { createContext } from "react";

export const authContext = createContext();

const AuthContextProvider = ({children}) => {
    return ( 
        <authContext.Provider value={{

        }} >
            {child}
        </authContext.Provider>
     );
}
 
export default AuthContextProvider;