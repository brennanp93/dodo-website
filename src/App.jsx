import { useState } from "react";

import "./App.css";
import Header from "./Header";
import EmailForm from "./EmailForm";
import AboutSection from "./AboutSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header/>
      <main>
<AboutSection/>
      </main>
        <EmailForm />
    </div>
  );
}

export default App;
