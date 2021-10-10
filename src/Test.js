import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";



// Class형 컴포넌트
class Test extends Component {
    render() {
        const { name } = this.props;
        const my_style = {
            backgroundColor : "blue",
            color : "orange",
            fontSize : "40px",
            padding : 12
        }

        return (
            <>
                <div style={my_style}>안녕하세요, 제 이름은 {name}입니다.</div>
            </>
        );
    }
}


export default Test;