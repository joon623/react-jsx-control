import "./App.css";
import { Show } from "./react-control/Show.tsx";

function App() {
  return (
    <>
      <h1>React Control</h1>
      <Show when={"ask"} fallback={<div>fallback</div>}>
        hi
      </Show>
    </>
  );
}

export default App;
