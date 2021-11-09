// modules 안에 counter.js 와 todos.js 두개의 리듀서가 있다. 이때 두개의 리듀서를 합쳐 줄때는 root 리듀서가 필요한데, 이때 사용하는게 combineReducers 이다.
import { combineReducers } from "redux";
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos
})

export default rootReducer;
/**
 * 리액트프로젝트에 리덕스를 적용할 때는  
 * npm add react-redux 설치 해야함.
*/
