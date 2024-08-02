import { useContext, useState } from "react";
import { authContext } from "./AuthContext";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({children}) => {
    const {isAuthticated,refreshToken} = useContext(authContext);
    const [allow,setAllow] = useState(true);
    const allow_access = () => {
        if (isAuthticated){
            let token = localStorage.getItem('access')
            if (token){
                let decoded = jwtDecode(token)
                if (!decoded.exp < Date.now()){
                    setAllow(True);
                }else{}

            }
        }else{
            setAllow(false);
        }
    }

    return children;
}
 
export default ProtectedRoute;