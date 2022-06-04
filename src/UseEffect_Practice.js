import React, { useState, useEffect } from "react";
import Timer from "./ex/Timer";

const UseEffect = () => {
//     const [count, setCount] = useState(1);
//     const [name, setName] = useState("");

    const [showTimer, setShowTimer] = useState(false);

//     const handleCountUpdate = () => {
//         setCount(count + 1);
//     };

//     const handleInputChange = (e) => {
//         setName(e.target.value);
//     }

//     // // mount + {item}이 변경될 때만 실행
//     // useEffect(() => {
//     //     console.log("Count 변화");
//     // }, [name]);

//     // mount 한 번만 될때만 실행
//     useEffect(() => {
//         console.log("mounting이 한 번만 될 때 실행");
//     }, []);

//     return (
//         <div>
//             <button onClick={handleCountUpdate}>Update</button>
//             <span>Count : {count}</span>
//             <input type="text" value={name} onChange={handleInputChange}/>
//             <span>name : {name}</span>
//         </div>
//     );

    return (
        <div>
            { showTimer && <Timer/> }
            <button onClick={()=> setShowTimer(!showTimer)}>Toggle Timer</button>
        </div>

    );
}

export default UseEffect;