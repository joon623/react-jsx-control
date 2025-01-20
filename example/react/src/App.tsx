import { Show } from "../../../src";
import "./App.css";

function App() {
  return (
    <>
      <h1>React Control</h1>
      <Show when={20 > 10} fallback={<div>fallback</div>}>
        Show
        <div
          style={{
            width: 100,
            height: 100,
          }}
        >
          <Show when={20 > 10} fallback={<div>nested fallback</div>}>
            nested Show
          </Show>
        </div>
      </Show>
    </>
  );
}

export default App;
