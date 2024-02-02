import React from "react";
function User({user}){
    return(
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    );
}
function UserList(){
    const users=[
        {
            id:1,
            username:"a",
            email:"a@gmail.com",
        },
        {
            id:2,
            username:"b",
            email:"b@gmail.com",
        },
        {
            id:3,
            username:"c",
            email:"c@gmail.com",
        },
    ];
    return(
        <div>
            {users.map((user) => (
                <User user={user}/>
            ))}
            {/* {users.map((user)=>(
                <div>
                    <b>{user.id}</b>
                    <b>{user.username}</b>
                    <b>{user.email}</b>
                </div>
            ))}       */}
        </div>
    );
}

export default UserList