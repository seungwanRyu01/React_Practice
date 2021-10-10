// import logo from './logo.svg';
import React, { Component, Fragment } from 'react';
import './App.css';
import Test from "./Test";
import Test2 from "./Test2";



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



// 부모 Component : 함수형
const App = () => {
    
    return (
        <>
            <Test name="유승완"></Test>
            <Test2></Test2>
        </>
    )
}


export default App;
