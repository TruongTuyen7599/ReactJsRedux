import { combineReducers, createStore } from 'redux';
import { gioHangReducer } from './reducers/gioHangReducers'


const rootReducer = combineReducers({
    // nơi chứa toàn bộ state của ứng dụng
    //reducer sẽ gần giống state
    gioHangReducer: gioHangReducer,
});

export const store = createStore(rootReducer);