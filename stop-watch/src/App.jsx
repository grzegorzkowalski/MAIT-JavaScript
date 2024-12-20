import {useDispatch, useSelector} from "react-redux";
import {addToList, startCounter, stopTimer} from "./redux/actions.js";
import './App.css'

function App() {
  const value = useSelector(state => state.counter.value);
  const isCounting = useSelector(state => state.counter.isCounting);
  const list = useSelector(state => state.list);
  const dispatch = useDispatch();

  return (
      <div>
          <div>
              <div>
                  <button onClick={() => dispatch(startCounter())}>start</button>
                  <button disabled={!isCounting} onClick={() => dispatch(stopTimer())}>stop</button>
                  <h1>{value}</h1>
              </div>
              <div>
                  <button onClick={() => dispatch(addToList(value))}>zapisz</button>
                  <ul>
                  {
                      list.map((el, i) => <li key={i}>{el}</li>)
                  }
                  </ul>
              </div>
          </div>
      </div>
  )
}

export default App
