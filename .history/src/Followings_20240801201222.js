import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Followings = () => {
    const {id} = useParams()
    useEffect(arrow)
    return ( 
        <div className="followers-page">
            Followings{id}
        </div>
     );
}
 
export default Followings;