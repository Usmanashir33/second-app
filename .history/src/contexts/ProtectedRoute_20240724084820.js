import { useContext } from "react";
import { authContext } from "./AuthContext";

const ProtectedRout = ({children}) => {
    const {isAuthticated,ref} = useContext(authContext);


    return children;
}
 
export default ProtectedRout;