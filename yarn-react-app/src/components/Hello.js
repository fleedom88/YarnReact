import React from "react";

function Hello(props){
    return <div>{props.isSpecial&&props.name}</div>
}

// Hello.defaultProps = {
//     name:"이름없음",
//     color:"red"
// };
export default Hello;