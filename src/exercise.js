import { createStore } from "redux";
//createStore : store를 만들어 주는 함수

const initialState = {
  counter: 0,
  text: '',
  list: []
}

// 액션 타입 상수 정의 
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// 액션 생성 함수 
function increase() {
  return {
    type: INCREASE // 액션 객체에는 type 값이 필수
  };
}

// 화살표 함수로 작성하는 것이 더욱 코드가 간단함.
const decrease = () => ({
  type: DECREASE,
})

const changeText = text => ({
  type: CHANGE_TEXT,
  text
})

const addToList = item => ({
  type: ADD_TO_LIST,
  item
})

// 리듀서를 만들때 함수를 한번 호출함
// 그 시점에 state가 undefined 이면 초기상태가 만들어지지 않으니까
// 초기 상태가 initialState가 되게끔 해야함
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
        //기존의 배열에 item을 추가한 배열을 만듦으로써 기존 리스트를 대체함.
        //push 말고 concat을 사용해야 불변성이 지켜짐.
      };
    default:
      return state;
  }
}

// 리듀서를 이용하여 스토어 만들기 
const store = createStore(reducer);
console.log(store.getState()); // 상태조회 -> 미들웨어 사용하면 거의 안씀

const listener = () => {
  const state = store.getState();
  console.log(state);
}

// 구독
const unsubscribe = store.subscribe(listener);
//unsubscribe(); : 구독을 해제할때는 unsubscribe를 호출하면 됨

//action을 발생시키기.
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요!'));
store.dispatch(addToList({ id: 1, text: '와우!'}));

// store의 인스턴스를 콘솔에서 사용가능
window.store = store;
window.unsubscribe = unsubscribe;