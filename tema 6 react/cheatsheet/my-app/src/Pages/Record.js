import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

export default function Record() {

    const [userData, setUserData] = useState({});

    const {user} = useParams();

    const USERS_URL = "https://reqres.in/api/users/";
    
    useEffect(() => {
        fetch(`${USERS_URL}${user}`)
        .then(response => response.json())
        .then(data => setUserData(data))
    }, [user]);


    return (
        <div>
           <h2>Record of  user {user}</h2> 
           <ul>
               <li>{userData.data?.email}</li>
               <li>{userData.data?.first_name}</li>
               <li>{userData.data?.last_name}</li>
               <img src={userData.data?.avatar} alt="profile"/>
           </ul>
        </div>
    )
}
