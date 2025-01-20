import { Ternary } from "../../../src";

export const TernaryExample = () => {
  return (
    <main>
      <h1>Ternary Example</h1>
      <Ternary when={true} falsy={<div>fal</div>} truthy={<div>truthy</div>} />
    </main>
  );
};
