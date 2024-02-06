import React, { useMemo } from "react";

const getNumber=(number)=>{
    console.log("숫자가 변동되었습니다.");
    return number;
};

const getText=(text)=>{
    console.log("글자가 변동되었습니다.");
    return text;
};

const ShowState = ({number, text}) =>{
    const showNumber = useMemo(()=> getNumber(number), [number]);
    const showText = useMemo(()=> getText(text), [text]);
    // 배열안의 요소 변경여부에 따라 연산된 값 대입
    return(
        <div className="info-wrapper">
            {showNumber}<br/>
            {showText}
        </div>
    );
};

export default ShowState;