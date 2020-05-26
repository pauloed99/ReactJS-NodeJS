export default function isAuthenticated(){

    const token = localStorage.getItem('token');

    if(!token)
        return false;
    else
        return true;    

}
