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
        }).then((data) => {

        })
        .catch((err) => {
            console.log(e);
        })
    }
    return (  );
}
 
export default CurrentUser;