import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Followings = () => {
    const {id} = useParams()
    return ( 
        <div className="followers-page">
            Followings
        </div>
     );
}
 
export default Followings;