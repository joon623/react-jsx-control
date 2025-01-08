import { describe } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { Show } from "../Show";
import { useEffect, useState } from "react";

const AsyncComponent = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData("Loaded");
    }, 100);
  }, []);

  return (
    <Show when={data} fallback={<div>loading..</div>}>
      <div>{data}</div>
    </Show>
  );
};

describe("test <Show /> component", () => {
  it("should render children 'when' is truthy ", () => {
    const truthy = [
      true,
      1,
      -1,
      "string",
      {},
      [],
      new Date(),
      Infinity,
      -Infinity,
      Symbol("symbol"),
    ];
    truthy.forEach((value) => {
      const { container } = render(
        <Show when={value} fallback={<p>fallback</p>}>
          <p>children</p>
        </Show>,
      );
      expect(container).toHaveTextContent("children");
    });
  });

  it("should not render children 'when' is falsy ", () => {
    const falsy = [false, 0, "", null, undefined, NaN];

    falsy.forEach((value) => {
      const { container } = render(<Show when={value} />);
      expect(container).toBeEmptyDOMElement();
    });
  });

  it("should render fallback when 'when' is falsy and fallback is provided", () => {
    render(<Show when={false} fallback={<p>fallback</p>} />);

    expect(screen.getByText("fallback")).toBeInTheDocument();
  });

  it("should render nothing when 'when' is false and fallback is not provided", () => {
    const { container } = render(<Show when={false} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("should render data after async operation", async () => {
    render(<AsyncComponent />);

    expect(screen.getByText("loading..")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Loaded")).toBeInTheDocument();
    });
  });
});
