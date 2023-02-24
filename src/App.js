
import './App.css';
import StyleContext from "./StyleContext"

import UserInterface from "./UserInterface"



function App() {
  const stylin = {
    background: "#1ECD97",
    display: "inline-block",
    width: 120,
    height: 55,
    fontSize: 18,
    letterSpacing: 1,
    border: "2px solid #1ECD97",
    borderRadius: 15

  };
  return (
    <main>
      <StyleContext.Provider value={stylin}>
     <h1
          style={{
            color: "#FEE001",
            fontFamily: "Luminari, fantasy",
            fontSize: 50
          }}
        >
          Welcome to Comics Galore!
        </h1>
        <UserInterface />
        </StyleContext.Provider>
    </main>
  );
}

export default App;
