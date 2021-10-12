import React, { Component, Fragment } from "react";

class Counter extends Component {

    // constructor : 생성자 메소드
    // super(props)를 호출하면 Component 클래스가 지닌 생성자 함수 호출

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         // 초깃값 설정
    //         number: 0,
    //         fixedNumber: 0
    //     };
    // }


    // constructor의 또다른 표현법
    state = {
        number: 0,
        fixedNumber: 0
    }

    render() {
        // 현재 state를 조회할 땐 this.state 사용
        const { number, fixedNumber } = this.state;

        return (
            <>
                <h1>{ number }</h1>
                <h2>바뀌지 않는 값: { fixedNumber }</h2>
                <button onClick = {() => {
                    // state 값을 바꿀 수 있게 만든다.
                    // this.setState({ number: number + 1 });

                    // prevState : 기존 상태, props : 현재 지니고 있는 props
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        };
                    });

                    // 아래 코드는 함수에서 바로 객체를 반환하며 위코드와 기능이 똑같음

                    this.setState(prevState => ({
                        number: prevState.number + 1
                    }));
                }}>
                    +1
                </button>
            </>
        );
    }
}

export default Counter;