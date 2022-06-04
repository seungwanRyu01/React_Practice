import React, { useState, useEffect } from "react";

const Timer = (props) => {

    // Timer Components가 한 번만 실행이 되어야 한다.
    // Clean up Effect 만드는 것
    useEffect(() => {
        // Mount
        const timer = setInterval(() => {
            console.log("타이머가 돌아가는 중...");
        }, 1000);
        
        // UnMount
        // Timer를 다 사용하고 종료시키기 위한 정리 함수
        return () => {
            clearInterval(timer);
            console.log("타이머가 종료되었습니다!");
        }
    }, []);

    return (
        <div>
            <span>Timer를 시작합니다. 콘솔을 보세요!</span>
        </div>
    )
};

export default Timer;