import { useState } from "react";

// import "./App.css";
import "./newApp.css";
import Header from "./Header";
import EmailForm from "./EmailForm";
import AboutSection from "./AboutSection";
import UpcomingEvents from "./UpcomingEvents";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <AboutSection />
      <UpcomingEvents />
      <Footer/>
    </div>
  );
}

export default App;
