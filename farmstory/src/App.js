import logo from './logo.svg';
import './styles/style.css';
import { RouterProvider } from 'react-router-dom';
import root from './router/root';

/*
  날짜 : 2024/05/08
  이름 : 김형민
  내용 : 리액트 팜스토리 실습

  npx create-react-app farmstory
  npm install react-router-dom
  npm install @reduxjs/toolkit react-redux
  npm install axios
  npm install react-cookie
*/
function App() {
    return <RouterProvider router={root} />;
}

export default App;
