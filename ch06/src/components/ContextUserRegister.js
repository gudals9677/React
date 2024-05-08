import React, { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';

// React에서 Form 받을때는 Change이벤트를 State에 저장
const ContextUserRegister = () => {
    const { users, setUsers } = useContext(UserContext);
    const [user, setUser] = useState({ uid: '', name: '', age: 0 });

    const inputChangeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        // Context users 상태 업데이트
        setUsers([...users, user]);
    };

    return (
        <div className="ContextUserRegister">
            <p>ContextUserRegister 실습</p>
            <form onSubmit={submitHandler}>
                <input type="text" name="uid" value={user.uid} onChange={inputChangeHandler} />
                <br />
                <input type="text" name="name" value={user.name} onChange={inputChangeHandler} />
                <br />
                <input type="text" name="age" value={user.age} onChange={inputChangeHandler} />
                <br />
                <input type="submit" value="저장" />
                <br />
            </form>
        </div>
    );
};

export default ContextUserRegister;
