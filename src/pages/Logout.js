import {useEffect} from 'react';


export default function Logout(props){
    
    useEffect(()=>{
        localStorage.removeItem('token');
        props.history.push('/');
    }, []);

    return null;

}