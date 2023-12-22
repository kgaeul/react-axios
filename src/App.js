import './App.css';
import NumberGuessingGame from '../../../react-game/src/NumberGuessingGame';

//import Counter from './ReducerCount';
//.Provider :해당 컴포넌트를
//통해서 ThemeContext 안에 있는
//컴포넌트 들한테 객체 값을 공유하고
//읽을 수 있도록 해줌
function App() {
  return <NumberGuessingGame />;
}

export default App;
