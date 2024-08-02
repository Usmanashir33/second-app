import { createContext } from "react";
export const formContext = createContext();

const FormContextProvider = ({children}) => {
    return ( 
        <formContext.Provider  >
            {children}
        </formContext.Provider>
     );
}
 
export default FormContextProvider;