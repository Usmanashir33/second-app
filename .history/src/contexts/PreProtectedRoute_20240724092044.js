import { useContext, useEffect, useState } from "react";
import { authContext } from "./AuthContext";
import { jwtDecode } from "jwt-decode";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const PreProtectedRoute = ({children}) => {
    const {isAuthticated,refreshToken} = useContext(authContext);
    const [allow,setAllow] = useState(true);
    const disallow_access = () => {
        if (isAuthticated){
            setAllow(true);
        }else{
            setAllow(true);
        }
    }
    useEffect(() => {
        disallow_access()
    },[])
    return allow? children : <Redirect to='/' />;
}
 
export default PreProtectedRoute;