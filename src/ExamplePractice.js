import React from 'react';
import { Fragment, useState } from 'react';

const ExamplePractice = () => {

    const [ names, setNames ] = useState ([
        { id : 1, text : '청바지' },
        { id : 2, text : '패딩' },
        { id : 3, text : '반팔' },
        { id : 4, text : '운동화' }
    ]);

    // 텍스트를 입력할 수 있는 input 상태
    const [ inputText, setInputText ] = useState("");
    // 데이터 배열, 새로운 항목을 추가할 때 사용할 Id
    const [ nextId, setNextId ] = useState(5); 

    // 데이터 배열에서 새로운 항목을 추가할 때 사용할 고유 id를 위한 상태
    const namesList = names.map( name => <li key={ name.id }>{ name.text }</li> );

    return(
        <>
            <ul>{ namesList }</ul>
        </>
    );
};

export default ExamplePractice;  