import { createContext } from "react";

export const authContext = createContext();

const AuthContextProvider = ({children}) => {
    const [isAuthenticated,setIsAuthenticated] = useS
    return ( 
        <authContext.Provider value={{

        }} >
            {children}
        </authContext.Provider>
     );
}
 
export default AuthContextProvider;