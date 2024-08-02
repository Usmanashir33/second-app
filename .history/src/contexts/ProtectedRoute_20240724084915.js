import { useContext } from "react";
import { authContext } from "./AuthContext";

const ProtectedRout = ({children}) => {
    const {isAuthticated,refreshToken} = useContext(authContext);
    if is

    return children;
}
 
export default ProtectedRout;