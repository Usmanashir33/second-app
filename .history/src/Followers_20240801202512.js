import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useGetUser from "./hooks/useGetUser";

const Followers = () => {
    const {id} = useParams();
    const {user,fetchUs} = useGetUser()

    useEffect(() => {
        
    },[id])

    return ( 
        <div className="followers-page">
            followers page -- {id}
        </div>
     );
}
 
export default Followers;