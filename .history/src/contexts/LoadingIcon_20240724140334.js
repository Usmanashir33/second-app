import { useContext, useState } from "react";

const Loading = () => {
    const {loading} = useContext(Au)
    return ( 
        <div className="loading-main">

        </div>
     );
}
 
export default Loading;