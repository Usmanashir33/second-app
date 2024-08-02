import { useContext } from "react";
import { authContext } from "./AuthContext";

const ProtectedRout = ({children}) => {
    const {isAuthticated} = useContext(authContext);
    return children;
}
 
export default ProtectedRout;