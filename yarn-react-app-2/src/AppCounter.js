import React from "react";
import Counter from "./components/Counter";

function AppCounter(){
    return(
        <div className="AppCounter">
            <Counter />
            <Counter />
            <Counter />
        </div>
    );

};

export default AppCounter;