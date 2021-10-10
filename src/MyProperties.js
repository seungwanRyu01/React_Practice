import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import bookAp from "./bookAp.jpg";


// 실습 1번 문제
// const MyProperties = props => {

//     return (
//         <>
//         이 음식의 이름은<span style={{ color:"red" }}> {props.food}</span>입니다.
//         </>
//     )
// };

// MyProperties.defaultProps = {
//     food: '피자'
// };




// 실습 2번 문제
// const MyProperties = props => {

//     const { title, author, price, type } = props;

//     return (
//         <div className="All">
//             <div className="best_title">이번주 베스트셀러</div>
//             <img src={ bookAp } className="book_img"></img>
//             <div className="title">{ title }</div>
//             <div className="content">저자 : { author }</div>
//             <div className="content">판매가 : { price }</div>
//             <div className="content">구분 : { type }</div>
//         </div>
//     );
// };




// 실습 3번 문제
class MyProperties extends Component {

    render() {
        const { text, valid } = this.props;

        return (
            <>
                <h2>{ text }</h2>
                <br/>
                <button onClick={ valid }>콘솔 메세지</button>
            </>
        );
    }
};

MyProperties.defaultProps = {
    text: "이건 기본 text props입니다."
};

MyProperties.propTypes = {
    text: PropTypes.string.isRequired
};



export default MyProperties;