import { FC } from "react";
import { Show } from "../../../src";

export const ShowExample: FC = () => {
  return (
    <>
      <h1>Show Example</h1>
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
};
