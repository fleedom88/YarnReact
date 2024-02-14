import React from "react";

function Emart3F({items,addDrink}){
const newDrink={name:"hot6",price:"1500"}
return(
    <div>
        <h3>이마트 3층</h3>
        <div>
            음료수
            {items.drink.map((item, index) => {
                return(
                    <div key={index}>
                        {item.name} : {item.price}원
                    </div>
                );
            })}
            <button onClick={addDrink(newDrink)} >음료 품목 추가</button>
        </div>
        
        <div>
            과일
            {items.fruits.map((item,index) =>{
                return(
                    <div key={index}>
                        {item.name} : {item.prcie}원
                    </div>
                );
            })

            }
        </div>
        
    </div>
);
};

export default Emart3F;
