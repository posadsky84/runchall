import './App.css';
import Calendar from './components/Calendar/Calendar';
import { useDispatch } from 'react-redux';
import { GET_LIST } from './redux/list-reducer';
import BigTable from './components/BigTable/BigTable';

function App() {

  const dispatch = useDispatch();
  dispatch({type: GET_LIST});

  return (
    <div className="App">
      <Calendar />
      <BigTable />
    </div>
  );
}

export default App;
