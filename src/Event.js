import React, { useState } from 'react';
import { Component, Fragment } from 'react';



// // 클래스형 이벤트 컴포넌트
// class Event extends Component {
//     state = {
//         // 초기값 설정
//         username: "",
//         message: ""
//     }

//     // constructor(props) {
//     //     super(props);
//     //     this.eventChange = this.eventChange.bind(this);
//     //     this.eventClick = this.eventClick.bind(this);
//     // }

//     // 이벤트 객체를 사용하고 감지한다.
//     eventChange = (e) => {
//         // setState를 통해 이벤트 value를 변경해준다.
//         this.setState({
//             // 변화를 감지하고 변화를 보고 싶을 때 이벤트 객체를 써준다.
//
//             // 비구조화 할당 문법 : 객체를 대괄호[]로 감싸면 그 안에 있는 코드가 지목하는 값이 key값으로 사용된다.
//             // message: e.target.value
//             [e.target.name]: e.target.value
//         });
//     }

//     eventClick = () => {
//         alert(this.state.username + ": " + this.state.message);
//         this.setState({
//             username: "",
//             message:""
//         });
//     }

//     // 위에 있는 eventClick()을 시행해라.
//     // 변화를 감지해야 하기 때문에 이벤트 객체를 사용할 것이다.
//     // Enter키로 이벤트를 실행시킬 수 있다.
//     eventKeyPress = (e) => {
//         if ( e.key === "Enter" ) {
//             this.eventClick();
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>이벤트를 배워보자!</h1>

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
//                     placeholder="여기에 글을 써보세요"
//                     value={ this.state.message }
//                     onChange={ this.eventChange }
//                     onKeyPress={ this.eventKeyPress }
//                 ></input>

//                 <button onClick={ this.eventClick }>클릭</button>
//             </div>
//         );
//     };
// };





// // 함수형 이벤트 컴포넌트
// const Event = () => {
//     const [ username, setUsername ] = useState("");
//     const [ message, setMessage ] = useState("");

//     const onChangeUsername = (e) => setUsername( e.target.value );
//     const onChangeMessage = (e) => setMessage( e.target.value );

//     const onClick = () => {
//         alert( username + ": " + message );
//         setUsername("");
//         setMessage("");
//     };

//     const onKeyPress = (e) => {
//         console.log( e );
//         console.log( e.key );
//         console.log( e.keycode );
//         if (e.key === "Enter") {
//             onClick();
//         }
//     }


//     return (
//         <>
//             <h1>리액트 이벤트 배워보자!!!</h1>

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
//                 placeholder="여기에 글을 써보세요"
//                 value={ message }
//                 onChange={ onChangeMessage }
//                 onKeyPress={ onKeyPress }
//             ></input>

//             <button onClick={ onClick }>클릭</button>
//         </>
//     );
// }

// export default Event;