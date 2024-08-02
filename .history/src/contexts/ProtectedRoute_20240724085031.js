import { useContext } from "react";
import { authContext } from "./AuthContext";

const ProtectedRoute = ({children}) => {
    const {isAuthticated,refreshToken} = useContext(authContext);
    if (isAuthticated){
        token = local
    }

    return children;
}
 
export default ProtectedRoute;