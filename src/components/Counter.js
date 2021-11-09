import React from 'react';

/**
 * 프레젠테이셔널 컴포넌트 
 * 리덕스 스토어에 직접적으로 접근하지 않고 필요한 값, 함수를 props로만 받아와서 사용하는 컴포넌트.
 * ui 설정에 집중
 */
function Counter({ number, diff, onIncrease, onDecrease, onSetDiff}) {
  const onChange = e => {
    /**
     * input을 구현하기 위해 만듦
     * 기본적으로 input의 value는 문자열 이므로, parseInt로 변환
     */
    onSetDiff(parseInt(e.target.value, 10));
  }
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} onChange={onChange}/>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;