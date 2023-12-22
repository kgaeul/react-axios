import React, { useReducer } from 'react';

//useReducer 상태관리를 위핸 Hook중 하나로 복잡한 상태 로직을 다룰 때 유용

//switch 를 활용해서 현재 상태와 액션을 받아서 새로운 상태를 전달할 예정

//useReducer(현재 상태,dispatch(=상태를 다른 값으로 업데이트하고 재실행시키는 함수))

//객체나 배열타입의 상태를 관리할때

//useState와 useReducer는 비슷한 Hook이기 때문에 코드나 상황에 맞게 사용을 해주면 됨

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };

    case 'DECREMENT':
      return { count: state.count - 1 };

    case 'RESET':
      return { count: state.count - state.count };
    default:
      return state;
  }
};

const Counter = () => {
  //useReducer를 사용해서 현재 상태와 디스패치 함수를 얻을 예정
  //counterReducer : 현재 상태와 액션값을 받아서 다음 상태를 결정하는 데 사용
  //첫 번째 매개변수로 counterReducer를 받고
  //두 번째 매개변수로 {count : 0}을 줘서 초기값을 0으로 설정
  //dispatch : 액션을 발생시키는 데 사용되는 함수
  //위에서 switch문 안에 있는 case가 선택되면 선택된 상태를 return해서 업데이트를 처리
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <>
      <p>count : {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>증가</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>감소</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>리셋</button>
    </>
  );
};

export default Counter;
