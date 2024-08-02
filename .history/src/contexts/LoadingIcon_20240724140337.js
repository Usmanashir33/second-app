import { useContext, useState } from "react";
import { authContext } from "./AuthContext";

const Loading = () => {
    const {loading} = useContext(authContext)
    return ( 
        <div className="loading-main">

        </div>
     );
}
 
export default Loading;