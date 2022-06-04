import React, { useState, useRef, useEffect } from 'react';

const UseRef = () => {
    const [ count, setCount ] = useState(1);
    const renderCount = useRef(1);
    // const countRef = useRef(0);
    // const [renderer, setRenderer] = useState(0);

    // console.log(countRef); // countRef.current

    // console.log("렌더링 돌리는 중...");

    useEffect(() => {
        renderCount.current += 1;
        console.log("렌더링 수 : ", renderCount.current);
    })

    // const increaseCountState = () => {
    //     setCount(count + 1);
    // };

    // const increaseCountRef = () => {
    //     countRef.current += 1;
    //     console.log('Ref: ', countRef.current);
    // }

    // let countVar = 0;

    // const increaseRef = () => {
    //     countRef.current += 1;
    //     console.log('ref : ', countRef.current);
    // }

    // const increaseVar = () => {
    //     countVar += 1;
    //     console.log('var : ', countVar);
    // }

    // const doRendering = () => {
    //     setRenderer(renderer + 1);
    // }

    return (
        <div>
            {/* <p>State : {count}</p> */}
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>올려</button>
            {/* <p>Ref : {countRef.current}</p>
            <p>Var : {countVar}</p>
            <button onClick={doRendering}>렌더!</button>
            <button onClick={increaseRef}>Ref 올려</button>
            <button onClick={increaseVar}>Var 올려</button> */}
            {/* <button onClick={increaseCountState}>State 올려</button>
            <button onClick={increaseCountRef}>Ref 올려</button> */}
        </div>
    );
};

export default UseRef;