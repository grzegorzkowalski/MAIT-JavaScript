import ParentComponent from "./components/Chapter06/ParentComponent";
import ChildComponent from "./components/Chapter06/ChildComponent";
import GrandchildComponent from "./components/Chapter06/GrandchildComponent";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParentComponent>
            <ChildComponent>
                 <GrandchildComponent />
            </ChildComponent>
        </ParentComponent>
      </header>
    </div>
  );
}

export default App;
