import React from 'react';
import { Fragment, useState } from 'react';



const Example = () => {

    const [ food, setFood ] = useState([
        { id: 1, text: "삼겹살" },
        { id: 2, text: "회덮발" },
        { id: 3, text: "커피" },
        { id: 4, text: "김밥" }
    ]);


    // input값은 빈 값으로 남겨두기
    const [ inputText, setInputText ] = useState("");
    // id를 관리할 수 있는 배열도 만들어준다.
    // nextId는 Id를 관리하는 것인데 Id가 4까지 있으므로 나중에 우리가 새로 추가할 Id를 넣을 자리를 만들어줘야 하므로 5로 초기값 부여
    const [ nextId, setNextId ] = useState(5);

    const onChange = (e) => setInputText( e.target.value );

    const onClick = () => {
        // concat함수를 이용해서 배열에 새로운 food를 이어붙이겠다. 자바스크립트의 append기능과 비슷함
        const nextfood = food.concat ({
            id: nextId,
            text: inputText
        });
        // 추가할 Id를 늘려준다.
        setNextId( nextId + 1 );
        setFood( nextfood );
        // 사용자가 입력할 값을 공란으로 비워주기
        setInputText("");
    };

    // value를 더블클릭 했을 때 value 삭제 함수
    // id값을 전달받게 만든다
    const onRemove = id => {
        const nextfood = food.filter(
            // 입력한 Id를 제외한 나머지 Id값들만 가져오는 filter함수다.
            food => food.id !== id
        );
        setFood( nextfood );
    }


    // Map 함수 사용하기
    // const food = [ "삼겹살", "회덮밥", "커피", "김밥" ];
    // 고유한 Key Props를 index에 부여해야 한다. 하지만 key값을 index에 부여하는 방식은 위험하기에 권장하지 않는다.
    // const foodList = food.map( ( foods, index ) => <li key={ index }>{ foods }</li> );
    const foodList = food.map( foods => <li key={ foods.id } onDoubleClick={ () => onRemove( foods.id ) }> { foods.text } </li> );


    return (
        <>
            <input type="text" value={ inputText } onChange={ onChange }></input>
            <button onClick={ onClick }>추가</button>
            { foodList }
        </>
    );
};


export default Example;