import { SwitchCase } from "../../../src";

export const SwitchCaseExample = () => {
  return (
    <main>
      <h1>SwitchCase Example</h1>
      <SwitchCase<number>
        caseBy={{ 1: <div>1</div>, 2: <div>2</div> }}
        match={1}
      />
    </main>
  );
};
