import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

/*
    라우팅 주소에서 cate1, cate2를 반환하는 커스텀 훅
*/
const useCates = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const paths = location.pathname.split('/');
    let cate1 = paths[1]; // 게시판이면 board
    let cate2 = paths[2]; // 게시판이면 list

    if (cate1 === 'board') {
        cate1 = searchParams.get('cate1');
        cate2 = searchParams.get('cate2');
    }

    return [cate1, cate2];
};

export default useCates;
