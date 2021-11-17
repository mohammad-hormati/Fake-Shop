import {combineReducers} from 'redux';
import {handleCart} from './handleCart';
import {handleNavRes} from './handleNaveRes'


const reducers = combineReducers({
    handleCart,
    handleNavRes
})


export default reducers