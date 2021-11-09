const SET_DIFF = 'counter/SET_DIFF'; // 다른 모듈과 이름이 중복되지 않게 하기 위함, 모듈 이름을 앞에 작성
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//리듀서에서 관리할 초기 상태 선언해주기 
const initialState = {
  number: 0,
  diff: 1
}

//리듀서를 작성할때는 export default 로 작성한다.
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      }
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      }
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      }
    default: 
      return state;
  }
}