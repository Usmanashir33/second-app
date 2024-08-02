const CurrentUser = () => {
    const  getUser = () => {
        fetch("",{
            method : "GET",
            headers : {
                "Authorization" : `Bearer `
            }
        }).then ((resp) => {
            if (resp.ok){
                ret
            }
        })
    }
    return (  );
}
 
export default CurrentUser;