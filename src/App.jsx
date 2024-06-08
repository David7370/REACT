import { ResultSummary } from "./components/ResultSummary";

import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return <div className="card">
  <ResultSummary/>
    </div>
}

export default App;
