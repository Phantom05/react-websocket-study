import {bindActionCreators} from 'redux';
import * as counterActions from 'store/modules/counter';


import store from './index';
const {dispatch} = store;
export const CounterActions = bindActionCreators(counterActions,dispatch)