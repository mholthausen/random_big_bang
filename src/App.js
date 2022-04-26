import "./styles.css";

import RandomButton from "./components/RandomButton/RandomButton";

export default function App() {
  return (
    <div className="App">
      <h1>Random Big Bang Theroy Episode</h1>
      <h2>
        Click the button to select a random episode of the series The Big Bang
        Theroy
      </h2>
      <RandomButton />
    </div>
  );
}
