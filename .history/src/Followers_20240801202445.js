import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Followers = () => {
    const {id} = useParams();
    const

    useEffect(() => {
        
    },[id])

    return ( 
        <div className="followers-page">
            followers page -- {id}
        </div>
     );
}
 
export default Followers;