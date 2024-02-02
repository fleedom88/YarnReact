import React from "react";

function User({user}){
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList(){
    const users=[
        {
            id:1,
            username:"cocoon",
            email:"asd123@gmail.com"
        },
        {
            id:2,
            username:"ultra",
            email:"qwe123@gmail.com"
        },
        {
            id:3,
            username:"hozae",
            email:"zxc123@gmail.com"
        },
    ]

    return(
        <div>
            {users.map((user,index)=>(
                <User user={user} key={index}></User>
            ))}
        </div>
    );
}

export default UserList;