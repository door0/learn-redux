const ADD_TODO = 'todos/ADD_TODO'; // 할일 항목 추가 
const TOGGLE_TODO = 'todos/TOGGLE_TODO'; // 할일 항목 체크 

let nextId = 1;

// 액션 생성 함수
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text
  }
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

// 초기상태
const initialState = [
  /**
   {
      id: 1,
      text: '메시',
      done: false
   }
   */
];

// 리듀서 
export default function todos(state = initialState, action ) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(
        todo => todo.id === action.id ? { ...state, done: !todo.done } : todo 
      );
    default:
      return state;
  }
}