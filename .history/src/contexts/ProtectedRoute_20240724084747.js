import { useContext } from "react";

const ProtectedRout = ({children}) => {
    const {isAuthticated} = useContext(Auth)
    return children;
}
 
export default ProtectedRout;