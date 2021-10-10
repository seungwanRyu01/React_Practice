import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import favicon from "./favicon.png"


// Class형 컴포넌트
class Test2 extends Component {
    render() {
        const style = {
            color : "orange",
            fontSize : "40px",
            marginTop : 20
        }

        return (
            <div style={style}>
                <h2>안녕하세요</h2>
                <img src={favicon}></img>
            </div>
        );
    }
}


export default Test2;