import { useContext } from "react";

const ProtectedRout = ({children}) => {
    const {isAuthticated} = useContext
    return children;
}
 
export default ProtectedRout;