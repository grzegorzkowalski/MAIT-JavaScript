import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { increment, start, stop, addToList} from "./counterSlice";
import '../App.css'

function Counter() {
    const value = useSelector(state => state.value);
    console.log(value);
    const isCounting = useSelector(state => state.isCounting);
    const list = useSelector(state => state.list);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isCounting) {
            const intervalID = setInterval(() => {
                dispatch(increment());
            }, 1000);
            return () => clearInterval(intervalID);
        }
    }, [isCounting]);


    return (
        <div>
            <div>
                <div>
                    <button onClick={() => dispatch(start())}>start</button>
                    <button disabled={!isCounting} onClick={() => dispatch(stop())}>stop</button>
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

export default Counter;
