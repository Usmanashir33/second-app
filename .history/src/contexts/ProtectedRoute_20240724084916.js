import { useContext } from "react";
import { authContext } from "./AuthContext";

const ProtectedRout = ({children}) => {
    const {isAuthticated,refreshToken} = useContext(authContext);
    if isAuthticated

    return children;
}
 
export default ProtectedRout;