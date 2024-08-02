const CurrentUser = () => {
    const  getUser = () => {
        fetch("",{
            method : "GET",
            headers : {
                "Authorization" : `Bearer `
            }
        }).then ((resp) => {
            if (resp.ok){
                return resp.json()
            }
            throw Error("failed to ")
        }).then((data) => {

        })
        .catch((err) => {
            console.log(error.message);
        })
    }
    return (  );
}
 
export default CurrentUser;