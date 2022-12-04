import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [fact, setFact] = useState("");

  function generateCatFact() {
    axios.get("https://catfact.ninja/fact").then((response) => {
      setFact(response.data.fact);
    });
  }
  useEffect(() => {
    generateCatFact();
  }, []);
  return (
    <div className="App">
      <h1>Cat Fact</h1>
      <button onClick={generateCatFact}>Generate</button>
      <p>{fact}</p>
    </div>
  );
}

export default App;
