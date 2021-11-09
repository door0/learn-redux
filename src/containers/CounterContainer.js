import React from 'react';
import Counter from '../components/Counter';
import { useDispatch, useSelector } from 'react-redux'; //상태조회
import { increase, decrease, setDiff } from '../modules/counter';

/**
 * 컨테이너 컴포넌트
 * 리덕스에 있는 상태를 조회하거나 action을 dispatch 할 수 있는 컴포넌트
 */
function CounterContainer() {
  const { number, diff } = useSelector(state => ({ 
    /** 여기서 state가 가르키는 건 store.getState()가 반환하는 객체 나오는거 그거 가져오는 거임  */
    number: state.counter.number,
    diff: state.counter.diff
    // 비구조 할당으로 바로 값 조회함
  }));
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return  <Counter 
    number={number}
    diff={diff}
    onIncrease={onIncrease}
    onDecrease={onDecrease}
    onSetDiff={onSetDiff}
  />;
}

export default CounterContainer;