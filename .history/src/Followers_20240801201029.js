import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Followers = () => {
    const {id} = useParams()
    return ( 
        <div className="followers-page">
            followers page{id}
        </div>
     );
}
 
export default Followers;