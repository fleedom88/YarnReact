import React from "react";
import Emart from "./Emart";

function Mart({items, addDrink}){
return(
 <div>
    <h1>마트</h1>
    <Emart items={items} addDrink={addDrink}></Emart>
 </div>
);
};

export default Mart;