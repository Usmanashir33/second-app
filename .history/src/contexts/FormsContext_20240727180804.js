import { createContext } from "react";
export const formContext = createContext();

const FormContextProvider = ({ch}) => {
    return ( 
        <formContext.Provider>

        </formContext.Provider>
     );
}
 
export default FormContextProvider;