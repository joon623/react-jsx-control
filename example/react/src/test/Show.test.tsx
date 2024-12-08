import { render, screen } from "@testing-library/react";
import { Show } from "../react-control";
import { describe, expect, it } from "vitest";
import React from "react";

describe("<Show /> component", () => {
  describe("Truthy cases", () => {
    it("If condition is truthy <Show /> renders children", () => {
      render(
        <Show when={true} fallback={<div>Fallback</div>}>
          <div>Show Children</div>
        </Show>,
      );

      expect(screen.getByText("Show Children")).toBeInTheDocument();
      expect(screen.queryByText("Fallback")).not.toBeInTheDocument();
    });
  });

  describe("Falsy cases", () => {
    it("If condition is falsy <Show /> renders fallback", () => {
      render(
        <Show when={false} fallback={<div>Fallback</div>}>
          <div>Show Children</div>
        </Show>,
      );

      expect(screen.getByText("Fallback")).toBeInTheDocument();
      expect(screen.queryByText("Show Children")).not.toBeInTheDocument();
    });
  });

  describe("Asynchronous cases", () => {
    it("Renders children after asynchronous condition becomes truthy", async () => {
      let resolveCondition: (value: boolean) => void;
      const conditionPromise = new Promise<boolean>((resolve) => {
        resolveCondition = resolve;
      });

      const AsyncShow = () => {
        const [condition, setCondition] = React.useState(false);

        React.useEffect(() => {
          conditionPromise.then(setCondition);
        }, []);

        return (
          <Show when={condition} fallback={<div>Loading...</div>}>
            <div>Async Children</div>
          </Show>
        );
      };

      render(<AsyncShow />);

      // Initially, fallback should be rendered
      expect(screen.getByText("Loading...")).toBeInTheDocument();

      // Resolve the condition
      resolveCondition!(true);
      await conditionPromise;

      // Wait for the children to appear
      expect(await screen.findByText("Async Children")).toBeInTheDocument();
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });
  });
});
