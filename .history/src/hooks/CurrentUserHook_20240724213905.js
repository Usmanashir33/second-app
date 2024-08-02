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
            throw E
        }).then((data) => {

        })
        .catch((err) => {
            console.log(error.message);
        })
    }
    return (  );
}
 
export default CurrentUser;