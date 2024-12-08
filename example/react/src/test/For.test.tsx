import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { For } from "../react-control/For.tsx";

describe("<For/> Component test", () => {
  it("renders a children for each item in the array", () => {
    const items = ["a", "b", "c"];
    render(
      <For each={items}>
        {(item, index) => <div>{`${index}: ${item}`}</div>}
      </For>,
    );

    items.forEach((item, index) => {
      expect(screen.getByText(`${index}: ${item}`)).toBeInTheDocument();
    });
  });

  it("renders the correct name and age for each item in the array", () => {
    const items = [
      { name: "teddy", age: 20 },
      { name: "jun", age: 30 },
    ];

    render(
      <For each={items}>
        {({ name, age }, index) => (
          <div>{`${index}: ${name}, Age: ${age}`}</div>
        )}
      </For>,
    );

    // Check if each item is rendered correctly
    expect(screen.getByText("0: teddy, Age: 20")).toBeInTheDocument();
    expect(screen.getByText("1: jun, Age: 30")).toBeInTheDocument();
  });

  it("renders fallback if each is empty", () => {
    const items = [];
    render(
      <For each={items} fallback={<div>Fallback</div>}>
        {(item, index) => <div>{`${index}: ${item}`}</div>}
      </For>,
    );

    expect(screen.queryByText("Fallback")).toBeInTheDocument();
  });

  it("renders nothing if each is empty and no fallback is provided", () => {
    const items = [];
    const { container } = render(
      <For each={items}>
        {(item, index) => <div>{`${index}: ${item}`}</div>}
      </For>,
    );

    expect(container.firstChild).toBeNull();
  });
});
