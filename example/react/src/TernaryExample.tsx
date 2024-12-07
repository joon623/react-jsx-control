import { Ternary } from "./react-control/Ternary.tsx";

export const TernaryExample = () => {
  return (
    <main>
      <h1>Ternary Example</h1>
      <Ternary when={true} falsy={<div>fal</div>} truthy={<div>truthy</div>} />
    </main>
  );
};
