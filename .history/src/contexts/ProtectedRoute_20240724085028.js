import { useContext } from "react";
import { authContext } from "./AuthContext";

const ProtectedRoute = ({children}) => {
    const {isAuthticated,refreshToken} = useContext(authContext);
    if (isAuthticated){
        token = 
    }

    return children;
}
 
export default ProtectedRoute;