
import { React } from 'react';
import { Component, Fragment } from 'react';
import { useState } from 'react';

const Event_ex = () => {

    const [data, setData] = useState([
        { id: 1, user: "코디", email: "codi@gmail.com" },
        { id: 2, user: "윤소희", email: "yoonsohee@gmail.com" }
    ]);

    const [inputUser, setInputUser] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [nextId, setNextId] = useState(3);

    const onChangeUser = (e) => {
        setInputUser(e.target.value);
    };

    const onChangeEmail = (e) => {
        setInputEmail(e.target.value);
    };

    const handleOnClick = () => {

        const NextData = data.concat({
            id: nextId, user: inputUser, email: inputEmail
        });

        setNextId(nextId + 1);
        setData(NextData);
        setInputUser("");
        setInputEmail("");
    };

    const keyPress = (e) => {
        if (e.key === "Enter") {
            handleOnClick();
        }
    };

    const Remove = (id) => {
        const NextData = data.filter( (data) => data.id !== id );
        setData(NextData);
    };

    const dataList = data.map((data) => (
        <h2 key={data.id} onDoubleClick={() => Remove(data.id)}>
            {data.user} : {data.email}
        </h2>
    ));

    return (
        <div>
            <input type="text" name="user" value={inputUser} placeholder="이름" onChange={onChangeUser}/>
            <input type="text" name="email" value={inputEmail} placeholder="이메일" onChange={onChangeEmail} onKeyPress={keyPress} />
            <button onClick={handleOnClick}>등록</button>
            <div>
                {dataList}
            </div>
        </div>
    );

}

export default Event_ex;