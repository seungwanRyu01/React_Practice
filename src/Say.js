import React, { Component, Fragment, useState } from "react";

const Say = () => {
    // useState 함수의 인자에는 state의 초깃값을 넣는다.
    // 배열 형태의 함수 : 세터(Setter)함수라고 부른다.
    // const [ message, setMessage ] = useState("");
    // const onClickEnter = () => setMessage("안녕하세요~!");
    // const onClickLeave = () => setMessage("안녕히가세요~!");

    // const [ color, setColor ] = useState("black");

    // return (
    //     <>
    //         <button onClick={ onClickEnter }>입장</button>
    //         <button onClick={ onClickLeave }>퇴장</button>
    //         <h1 style={{ color }}>{ message }</h1>

    //         <button style={{ color: "red" }} onClick={() => setColor("red")}>빨간색</button>
    //         <button style={{ color: "blue" }} onClick={() => setColor("blue")}>파란색</button>
    //         <button style={{ color: "orange" }} onClick={() => setColor("orange")}>오렌지색</button>
    //     </>
    // );

    const [ number, setNumber ] = useState(0);
    const Increase = () => setNumber( number + 1 );
    const Decrease = () => setNumber( number - 2 );

    return (
        <>
            <h1>{ number }</h1>
            <button onClick={ Increase }>증가</button>
            <button onClick={ Decrease }>감소</button>
        </>
    );
}

export default Say;