import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../store';
import { decrement, increment, reset } from '../slices/counterSlice';
import ReduxChild from './ReduxChild';

const ReduxParent = () => {
    // 리덕스 스토어 상태 조회
    const count = useSelector((state) => state.counter.count);

    // 리덕스 dispath 함수 생성
    const dispatch = useDispatch();

    return (
        <div className="ReduxParent">
            <p>ReduxParent count : {count}</p>
            <button
                onClick={() => {
                    dispatch(increment());
                }}
            >
                증가
            </button>
            <button
                onClick={() => {
                    dispatch(decrement());
                }}
            >
                감소
            </button>
            <button
                onClick={() => {
                    dispatch(reset(0));
                }}
            >
                리셋
            </button>
            <ReduxChild />
        </div>
    );
};

export default ReduxParent;
