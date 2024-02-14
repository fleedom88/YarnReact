import React, { useState } from "react";
import Mart from "./components/useContext/Mart";

const initialItems={
    drink:[
        { name:"powerade", price:1800},
        { name:"coca cold", price:1100},]
        ,
    fruits:[
        { name:"Apple", price:3500},
        { name:"Grape", price:6000},
    ],
};

function AppUseContext(){
    const [items,setItems] = useState(initialItems)
    const addDrink = (newdrink)=>{
        setItems({...items,drink:[items.drink,newdrink]});
        console.log(newdrink.name + "가 추가되었습니다.");
    };

    return(
        <div>
            <Mart items={items} addDrink={addDrink}/>
        </div>
    );
};

export default AppUseContext;
