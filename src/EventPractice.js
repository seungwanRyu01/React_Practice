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


// 함수형 컴포넌트 이벤트
const EventPractice = () => {

    const [ form, setForm ] = useState({ username: "", message: "" });
    const { username, message } = form;

    const onChange = (e) => {
        const nextForm = { ...form, [e.target.name]: e.target.value};
        setForm(nextForm);
    };

    const onClick = () => {
        alert(username + ": " + message);
        setForm({ username: "", message: "" })
    };

    const onKeyPress = (e) => {
        if(e.key === "Enter") {
            onClick();
        }
    };

    return (
        <div>
            <h1>리액트의 이벤트!!</h1>

            <input
                type="text"
                name="username"
                placeholder="사용자 이름"
                value={username}
                onChange={onChange}
            />

            <input
                type="text"
                name="message"
                placeholder="이곳에 입력해보세요."
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />

            <button onClick={onClick}>클릭</button>
        </div>
    );
}


export default EventPractice;