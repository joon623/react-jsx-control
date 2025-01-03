import "./App.css";
import { Match, Switch } from "../../../src";

export function SwitchExample() {
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
