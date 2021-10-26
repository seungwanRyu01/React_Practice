import { React } from 'react';
import { Component, Fragment } from 'react';
import { useState } from 'react';



// //클래스형 컴포넌트 이벤트
// class EventPractice extends Component {

//     state = {
//         username : "",
//         message : ""
//     };

//     eventChange = (e) => {
//         this.setState ({
//             [e.target.name]: e.target.value
//         });
//     };

//     eventClick = () => {
//         alert( this.state.username + ": " + this.state.message )
//         this.setState ({
//             username : "",
//             message : ""
//         });
//     };

//     eventKeyPress = (e) => {
//         if (e.charCode == 13) {
//             this.eventClick();
//         }
//     };

//     render() {
//         return (
//             <>
//                 <h1>이벤트 연습을 해보자!!!</h1>

//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="이름을 적어주세요"
//                     value={ this.state.username }
//                     onChange={ this.eventChange }
//                 ></input>

//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="메세지를 적어주세요"
//                     value={ this.state.message }
//                     onChange={ this.eventChange }
//                     onKeyPress={ this.eventKeyPress }
//                 ></input>

//                 <button onClick={ this.eventClick }>클릭</button>
//             </>

//         );
//     };
// };




// // 함수형 컴포넌트 이벤트
// const EventPractice = () => {

//     const [ username, setUsername ] = useState("");
//     const [ message, setMessage ] = useState("");

//     const onChangeUsername = (e) => setUsername( e.target.value );
//     const onChangeMessage = (e) => setMessage( e.target.value );

//     const onClick = () => {
//         alert( username + ": " + message )
//         setUsername("");
//         setMessage("");
//     }

//     const onKeyPress = (e) => {
//         if (e.charCode == 13) {
//             onClick();
//         }
//     }

//     return (
//         <>
//             <h1>이벤트 연습을 해보자!!!</h1>

//             <input
//                 type="text"
//                 name="username"
//                 placeholder="이름을 적어주세요"
//                 value={ username }
//                 onChange={ onChangeUsername }
//             ></input>

//             <input
//                 type="text"
//                 name="message"
//                 placeholder="메세지를 적어주세요"
//                 value={ message }
//                 onChange={ onChangeMessage }
//                 onKeyPress={ onKeyPress }
//             ></input>

//             <button onClick={ onClick }>클릭</button>
//         </>

//     );
// };


// export default EventPractice;