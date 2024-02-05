import React from "react";

function User({user, onRemove, onToggle}){
    return(
        <div>
            <b
            style={{
                cursor:"pointer",
                color: user.active? "green":"black", 
            }}
            >{user.username}</b> 
            <span>({user.email})</span>
            <button
            onClick={()=>{
                onToggle(user.id);
                // onRemove(user.id);
            }}
            >삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}){
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
                <User user={user} 
                key={user.id} 
                onRemove={onRemove}
                onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default UserList;