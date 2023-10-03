// import CounterContainer from './containers/CounterContainer';
// import logo from './logo.svg';
// import './App.css';
import CounterListContainer from "./containers/CounterListContainer";
import { getRandomColor } from './utils';
import { createCounter, removeCounter } from './actions';
import { useDispatch } from 'react-redux';
import Buttons from './components/Buttons';

function App() {

  const dispatch = useDispatch();

  const onCreate = () => dispatch(createCounter(getRandomColor()));
  const onRemove = (index) => dispatch(removeCounter(index));
  
  return (
    <div className="App">
      {/* <CounterContainer /> */}
      <Buttons
        onCreate={onCreate}
        onRemove={onRemove}
      />
      <CounterListContainer />
    </div>
  );
}

export default App;
