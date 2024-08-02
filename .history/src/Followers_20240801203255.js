import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useGetUser from "./hooks/useGetUser";

const Followers = () => {
    const {id} = useParams();
    const {user:users,fetchUser} = useGetUser()

    useEffect(() => {
        fetchUser(`${id}/followers/`)
    },[id])
    // console.log(users);
    return ( 
        <div className="followers-page">
           {users && users.map(({user}) => (
                <div>
                    {user.id}
                </div>
           ))
           }
        </div>
     );
}
 
export default Followers;