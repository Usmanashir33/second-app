import { createContext } from "react";
export const formContext = createContext();

const FormContextProvider = ({}) => {
    return ( 
        <formContext.Provider>

        </formContext.Provider>
     );
}
 
export default FormContextProvider;