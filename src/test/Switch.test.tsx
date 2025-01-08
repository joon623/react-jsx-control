import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Match } from "../Match";
import { Switch } from "../Switch";

describe("test <Switch /> component", () => {
  it("should render the correct child when condition is truthy", () => {
    render(
      <Switch>
        <Match when={false}>
          <div data-testid="case1">first</div>
        </Match>
        <Match when={true}>
          <div data-testid="case2">second</div>
        </Match>
      </Switch>,
    );

    expect(screen.queryByTestId("case1")).toBeNull();
    expect(screen.getByTestId("case2")).toBeInTheDocument();
  });

  it("should render nothing when all conditions are falsy", () => {
    render(
      <Switch>
        <Match when={false}>
          <div data-testid="case1">first</div>
        </Match>
        <Match when={false}>
          <div data-testid="case2">second</div>
        </Match>
      </Switch>,
    );

    expect(screen.queryByTestId("case1")).toBeNull();
    expect(screen.queryByTestId("case2")).toBeNull();
  });

  it("should render the first matching case if multiple cases are truthy", () => {
    render(
      <Switch>
        <Match when={true}>
          <div data-testid="case1">first</div>
        </Match>
        <Match when={true}>
          <div data-testid="case2">second</div>
        </Match>
      </Switch>,
    );

    expect(screen.getByTestId("case1")).toBeInTheDocument();
    expect(screen.queryByTestId("case2")).toBeNull();
  });

  it("should render nothing if no children are passed", () => {
    const { container } = render(<Switch>{null}</Switch>);

    expect(container).toBeEmptyDOMElement();
  });

  it("should handle Match component without children gracefully", () => {
    const { container } = render(
      <Switch>
        <Match when={true} />
      </Switch>,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
