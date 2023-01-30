import React from "react";
import { UserContext } from "./Page";
import { useContext } from "react";


const User = () =>{

    const user = useContext(UserContext);
    
    return (

        <div>
            {user.name}
        </div>

    );



};

export default User;