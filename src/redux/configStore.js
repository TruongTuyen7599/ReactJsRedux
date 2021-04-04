import { combineReducers, createStore } from 'redux';
import { gioHangReducer } from './reducers/gioHangReducers'
import { quanLySinhVienReducer } from './reducers/quanLySinhVienReducer'


const rootReducer = combineReducers({
    // nơi chứa toàn bộ state của ứng dụng
    //reducer sẽ gần giống state
    gioHangReducer: gioHangReducer,
    quanLySinhVienReducer: quanLySinhVienReducer

    // stateB:stateB;
});

export const store = createStore(rootReducer);