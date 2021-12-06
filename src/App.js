import { useState } from "react";
import "./App.css";
import ArrayList from "./components/ArrayList";
import Header from "./components/Header";
import Tas from "./components/Tas";
import Timer2 from "./components/Timer2";

function App() {
  const [status, setStatus] = useState(false);
  const [word, setWord] = useState();
  const [test, setTest] = useState(false);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="first">
          <div className="tas">
            <Tas setStatus={setStatus} animation={setTest} />
          </div>
          <div className="ArrayList">
            {status ? <ArrayList animation={[test, setTest]} /> : null}
          </div>
        </div>
        <div className="timer">{status ? <Timer2 /> : null}</div>
      </div>
    </div>
  );
}

export default App;
