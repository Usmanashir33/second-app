import { useContext } from "react";

const ProtectedRout = ({children}) => {
    const {isAuthticated} = useContext(Aut)
    return children;
}
 
export default ProtectedRout;