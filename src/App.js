// import logo from './logo.svg';
import React, { Component, Fragment } from 'react';
import './App.css';
import MyProperties from './MyProperties';
import Test from "./Test";
import Test2 from "./Test2";
import Counter from './Counter';
import Say from './Say';
import Example from './Example';
import Event from './Event';
import ExamplePractice from './ExamplePractice.js';
import EventPractice from './EventPractice';
import Article from './Article';
import Event_ex from './ex/Event_ex';
import UseEffect from './UseEffect_Practice';
import UseRef from './UseRef_Practice';
import RefLogin from './UseRef_Login';


// React 기본 App() 함수
// function App() {
//     return (
//     <div className="App">
//         <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//                 Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <a
//                 className="App-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 Learn React
//             </a>
//         </header>
//     </div>
//     );
// }


// 부모 Component Props : 함수형
// const App = () => {

//     const func = () => {
//         console.log("콘솔 띄우기 성공!");
//     };

//     return (
//         <>
//             <MyProperties 
//                 text = "App 컴포넌트에서 넘겨준 text props입니다."
//                 valid = { func }
//             >
//             </MyProperties>
//         </>
//     );
// }

const App = () => {

    return (
        <RefLogin/>
    );
};

export default App;