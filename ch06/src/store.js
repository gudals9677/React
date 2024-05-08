import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice';
// Redux Store 설정
export default configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    },
});
