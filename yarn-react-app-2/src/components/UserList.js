import React from "react";

function User({user, onRemove}){
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
            <button
            onClick={()=>{
                onRemove(user.id);
            }}
            >삭제</button>
        </div>
    );
}

function UserList({users, onRemove}){
    // const users=[
    //     {
    //         id:1,
    //         username:"cocoon",
    //         email:"asd123@gmail.com"
    //     },
    //     {
    //         id:2,
    //         username:"ultra",
    //         email:"qwe123@gmail.com"
    //     },
    //     {
    //         id:3,
    //         username:"hozae",
    //         email:"zxc123@gmail.com"
    //     },
    // ]
    return(
        <div>
            {users.map((user)=>(
                <User user={user} key={user.id} onRemove={onRemove}></User>
            ))}
        </div>
    );
}

export default UserList;