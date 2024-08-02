import { useContext, useEffect, useState } from "react";
import { authContext } from "./AuthContext";
import { jwtDecode } from "jwt-decode";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const PreProtectedRoute = ({children}) => {
    const {isAuthticated,refreshToken} = useContext(authContext);
    const [allow,setAllow] = useState(true);
    const dallow_access = () => {
        if (isAuthticated){
            let token = localStorage.getItem('access')
            if (token){
                let decoded = jwtDecode(token)
                if (!decoded.exp < Date.now()){
                    setAllow(True);
                }else{
                    refreshToken();
                    return allow_access();
                }
            }else{setAllow(false)};
        }else{
            setAllow(false);
        }
    }
    useEffect(() => {
        allow_access()
    },[])
    return allow? children : <Redirect to='/' />;
}
 
export default PreProtectedRoute;