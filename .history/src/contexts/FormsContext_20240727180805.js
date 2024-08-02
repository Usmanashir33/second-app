import { createContext } from "react";
export const formContext = createContext();

const FormContextProvider = ({childre}) => {
    return ( 
        <formContext.Provider>

        </formContext.Provider>
     );
}
 
export default FormContextProvider;