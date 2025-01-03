import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Ternary } from "../Ternary";

describe("<Ternary /> Component test", () => {
  it("renders a truthy if condition is true", () => {
    render(
      <Ternary
        when={true}
        truthy={<div>Truthy</div>}
        falsy={<div>Falsy</div>}
      />,
    );

    expect(screen.getByText("Truthy")).toBeInTheDocument();
  });

  it("renders a Falsy if condition is true", () => {
    render(
      <Ternary
        when={false}
        truthy={<div>Truthy</div>}
        falsy={<div>Falsy</div>}
      />,
    );

    expect(screen.getByText("Falsy")).toBeInTheDocument();
  });

  it("renders complex JSX in truthy condition", () => {
    render(
      <Ternary
        when={true}
        truthy={
          <div>
            <h1>Header</h1>
            <p>Description</p>
          </div>
        }
        falsy={<div>Fallback</div>}
      />,
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.queryByText("Fallback")).not.toBeInTheDocument();
  });

  it("renders truthy when 'when' is a BooleanLike value", () => {
    render(
      <Ternary
        when={1} // Boolean-like truthy value
        truthy={<div>Truthy</div>}
        falsy={<div>Falsy</div>}
      />,
    );

    expect(screen.getByText("Truthy")).toBeInTheDocument();
    expect(screen.queryByText("Falsy")).not.toBeInTheDocument();
  });

  it("renders falsy when 'when' is a falsy BooleanLike value", () => {
    render(
      <Ternary
        when={0} // Boolean-like falsy value
        truthy={<div>Truthy</div>}
        falsy={<div>Falsy</div>}
      />,
    );

    expect(screen.getByText("Falsy")).toBeInTheDocument();
    expect(screen.queryByText("Truthy")).not.toBeInTheDocument();
  });

  it("renders falsy when 'when' is undefined", () => {
    render(
      <Ternary
        when={undefined}
        truthy={<div>Truthy</div>}
        falsy={<div>Falsy</div>}
      />,
    );

    expect(container.firstChild).toBeNull();
  });

  it("renders falsy when 'when' is null", () => {
    render(
      <Ternary
        when={null}
        truthy={<div>Truthy</div>}
        falsy={<div>Falsy</div>}
      />,
    );

    expect(container.firstChild).toBeNull();
  });

  it("renders nothing if 'truthy' and 'falsy' are both undefined", () => {
    const { container } = render(<Ternary when={true} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders only truthy when 'falsy' is missing", () => {
    render(<Ternary when={true} truthy={<div>Truthy</div>} />);

    expect(screen.getByText("Truthy")).toBeInTheDocument();
  });
});
