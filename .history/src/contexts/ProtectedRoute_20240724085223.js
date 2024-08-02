import { useContext } from "react";
import { authContext } from "./AuthContext";

const ProtectedRoute = ({children}) => {
    const {isAuthticated,refreshToken} = useContext(authContext);
    const allow_access = () => {
        if (isAuthticated){
            let token = localStorage.getItem('access')
            let exp = jw
        }
    }

    return children;
}
 
export default ProtectedRoute;