import React,{useState, useRef} from "react";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";

function App() {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
  });

  const [users, setUsers]= useState([
    {id:1,
    username: "cocoon",
    email: "asd123@gmail.com",
    },
    {id:2,
      username: "ultra",
      email: "qwe123@gmail.com",
    },
    {id:3,
      username: "hozae",
      email: "zxc123@gmail.com",
    },
    ]);

  const {username, email} = inputs;
  const nextId = useRef(4);

  const onChange = (e) =>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value,
    });
  };

  const onCreate = () =>{
    const user ={
      id:nextId.current,
      username,
      email,
    };

    setUsers([...users], user);
    //또는 setUsers(users.concat(user));

    setInputs({
      username:"",
      email:"",
    });

    nextId.current += 1;
  };

  const onRemove = (id) =>{
    setUsers(users.filter((user) => user.id !==id));
  }
  return (
    <>
      <CreateUser
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
      ></CreateUser>
      <UserList user={users} onRemove={onRemove}></UserList>
    </>
  );
}

export default App;
