import useInput from './customHooks/useInput';
import './App.css';

function App() {
  

  const checkLength = (value) => value.length <= 5; 
  const name = useInput('', checkLength);

  return (
    <div className="App">

      <div className="use-input"> useInput 테스트 입니다.
        <input value={name.value} onChange={name.onChange}></input>
      </div>


    </div>
  );
}

export default App;
