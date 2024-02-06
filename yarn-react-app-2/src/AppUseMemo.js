import React, { useState } from "react";
import ShowState from "./components/ShowState";


const AppUseMemo=()=>{
const [number, setNumber]=useState(0);
const [text, setText] = useState("");

const increaseNumber = () =>{
    setNumber((prevNumber) => prevNumber + 1);
};

const decreaseNumber = () =>{
    setNumber((prevNumber) => prevNumber - 1);
};

const onChangeTextHandler = (e) =>{
  setText(e.target.value);  
};

    return(
        <div className="App" style={{ margin:"50px"}}>
            <div>
                <button onClick={increaseNumber}>+</button>
                <button onClick={decreaseNumber}>-</button>
                <input
                    type="text"
                    placeholder="Text..."
                    onChange={onChangeTextHandler}
                    />
            </div>
            <ShowState number={number} text={text}></ShowState>
        </div>
    );
};

export default AppUseMemo;