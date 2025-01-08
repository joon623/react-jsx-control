import { describe, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { For } from "../For";
import { useEffect, useState } from "react";

const AsyncComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(["bulldog", "poodle", "beagle"]);
    }, 100);
  }, []);

  return (
    <For each={data} fallback={<div>loading...</div>}>
      {(element) => {
        return <div>{element}</div>;
      }}
    </For>
  );
};

describe("test <For /> component", () => {
  it("should render for each item in the list", () => {
    const dogs = ["bulldog", "poodle", "beagle"];

    render(<For each={dogs}>{(dog) => <div>{dog}</div>}</For>);

    dogs.forEach((dog) => {
      expect(screen.getByText(dog)).toBeInTheDocument();
    });
  });

  it("should not render nothing if each is empty", () => {
    const { container } = render(<For each={[]}>{() => <div>dog</div>}</For>);

    expect(container).toBeEmptyDOMElement();
  });

  it("should render fallback if each is empty", () => {
    render(
      <For fallback={<div>fallback</div>} each={[]}>
        {() => <div></div>}
      </For>,
    );

    expect(screen.getByText("fallback")).toBeInTheDocument();
  });

  it("should render fallback if each is null", () => {
    render(
      <For fallback={<div>fallback</div>} each={null}>
        {() => <div></div>}
      </For>,
    );

    expect(screen.getByText("fallback")).toBeInTheDocument();
  });

  it("should render fallback if each is undefined", () => {
    render(
      <For fallback={<div>fallback</div>} each={undefined}>
        {() => <div></div>}
      </For>,
    );

    expect(screen.getByText("fallback")).toBeInTheDocument();
  });

  it("should render all items even if duplicates exist", () => {
    const dogs = ["bulldog", "poodle", "poodle", "beagle"];
    render(<For each={dogs}>{(dog) => <div>{dog}</div>}</For>);

    expect(screen.getAllByText("poodle")).toHaveLength(2);
    expect(screen.getByText("bulldog")).toBeInTheDocument();
    expect(screen.getByText("beagle")).toBeInTheDocument();
  });

  it("should render nothing if each is empty and no fallback is provided", () => {
    const { container } = render(<For each={[]}>{() => <div>dog</div>}</For>);

    expect(container).toBeEmptyDOMElement();
  });

  it("should render data after async operation", async () => {
    render(<AsyncComponent />);
    expect(screen.getByText("loading...")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("bulldog")).toBeInTheDocument();
      expect(screen.getByText("poodle")).toBeInTheDocument();
      expect(screen.getByText("beagle")).toBeInTheDocument();
    });
  });
});
