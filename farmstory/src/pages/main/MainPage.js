import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Main from '../../components/main/Main';
import DefalutLayout from '../../layouts/DefalutLayout';

const MainPage = () => {
    return (
        <DefalutLayout>
            <Main />
        </DefalutLayout>
    );
};

export default MainPage;
