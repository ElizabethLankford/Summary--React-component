import React from "react"
import Footer from "./Footer"
import Result from "./Result"
import data from "./data.json"
import './App.css';
import MiniSection from "./MiniSection";

function App() {
  const miniSections = data.map(item => {
    return(
      <MiniSection 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <main>
      <Result />
      <div className="summary-container">
        <h2>Summary</h2>
        {miniSections}
        <button class="continue-btn">Continue</button>
      </div>

      </main>
      <Footer />
    </div>
  );
}

export default App;
