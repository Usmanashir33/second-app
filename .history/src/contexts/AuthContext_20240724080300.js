import { createContext } from "react";

export const authContext = createContext();

const AuthContextProvider = ({children}) => {
    const [isAuthenticated]
    return ( 
        <authContext.Provider value={{

        }} >
            {children}
        </authContext.Provider>
     );
}
 
export default AuthContextProvider;