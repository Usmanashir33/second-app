import { useContext } from "react";
import { authContext } from "./AuthContext";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({children}) => {
    const {isAuthticated,refreshToken} = useContext(authContext);
    const [allow,setAllow]
    const allow_access = () => {
        if (isAuthticated){
            let token = localStorage.getItem('access')
            if (token){
                let decoded = jwtDecode(token)

            }
        }
    }

    return children;
}
 
export default ProtectedRoute;