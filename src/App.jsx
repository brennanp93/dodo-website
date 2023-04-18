import { useState } from "react";

import "./App.css";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header/>
      <main>
        <h1>DODO Networking</h1>
      </main>
    </div>
  );
}

export default App;
