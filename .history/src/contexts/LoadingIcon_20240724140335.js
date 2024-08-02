import { useContext, useState } from "react";

const Loading = () => {
    const {loading} = useContext(Aut)
    return ( 
        <div className="loading-main">

        </div>
     );
}
 
export default Loading;