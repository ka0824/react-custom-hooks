import useInput from './customHooks/useInput';
import content from './data/content';
import useTab from './customHooks/useTab';
import './App.css';

function App() {
  

  const checkLength = (value) => value.length <= 5; 
  const name = useInput('', checkLength);

  const {currentItem, changeItem } = useTab(0, content);

  return (
    <div className="App">

      <div className="use-input"> useInput 테스트 입니다.
        <input value={name.value} onChange={name.onChange}></input>
      </div>

      <div className="use-tap"> useTab 테스트 입니다.
        {content.map((el, idx) => {
          return <button key={`tap-${idx}`} onClick={() => changeItem(idx)}>{el.text}</button>
        })}
        <div>{currentItem.text}</div>
      </div>


    </div>
  );
}

export default App;
