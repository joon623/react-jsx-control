import "./App.css";
import { Match, Show, Switch } from "./react-control";

function SwitchPage() {
  return (
    <>
      <h1>Switch</h1>
      <Switch>
        <Match when={1 === 2}>
          <div>first</div>
        </Match>
        <Match when={1 === 1}>
          <div>second</div>
        </Match>
      </Switch>
    </>
  );
}

export default SwitchPage;
