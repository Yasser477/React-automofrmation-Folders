import React from "react";
import User from "./User";

export const UserContext = React.createContext();

const user = { name : "ALPHA"};

const Page = (props) => {

    console.log(props)
   

    return (
    
    <UserContext.Provider value={user}>
    <User/>
    <h1>hello  {props.name} is as {props.heroName}</h1>
    {props.children}
    </UserContext.Provider>

  

    );


};

export default Page;