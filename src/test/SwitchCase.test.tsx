import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { SwitchCase } from "../SwitchCase";
import { useEffect, useState } from "react";

const AsyncComponent = () => {
  const [condition, setCondition] = useState("c");

  useEffect(() => {
    setTimeout(() => {
      setCondition("a");
    }, 100);
  }, []);

  return (
    <SwitchCase
      match={condition}
      caseBy={{
        a: <div data-testid="case1">first</div>,
        b: <div data-testid="case2">second</div>,
      }}
      fallback={<div data-testid="fallback">fallback</div>}
    />
  );
};

describe("test <SwitchCase /> component", () => {
  it("should render the correct child when condition is truthy", () => {
    render(
      <SwitchCase
        match={"a"}
        caseBy={{
          a: <div data-testid="case1">first</div>,
          b: <div data-testid="case2">second</div>,
        }}
      />,
    );

    expect(screen.queryByTestId("case1")).toBeInTheDocument();
    expect(screen.queryByTestId("case2")).toBeNull();
  });

  it("should render nothing if no case matches the given condition ", () => {
    render(
      <SwitchCase
        match={"c"}
        caseBy={{
          a: <div data-testid="case1">first</div>,
          b: <div data-testid="case2">second</div>,
        }}
      />,
    );

    expect(screen.queryByTestId("case1")).toBeNull();
    expect(screen.queryByTestId("case2")).toBeNull();
  });

  it("renders the correct component after asynchronous state change", async () => {
    render(<AsyncComponent />);
    expect(screen.queryByTestId("fallback")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId("case1")).toBeInTheDocument();
      expect(screen.queryByTestId("case2")).toBeNull();
    });
  });

  it("should render fallback initially and remove it after condition changes", async () => {
    render(<AsyncComponent />);

    expect(screen.queryByTestId("fallback")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId("fallback")).toBeNull();
    });
  });

  it("should render fallback if the match does not exist in caseBy", () => {
    render(
      <SwitchCase
        match={"nonexistent"}
        caseBy={{
          a: <div data-testid="case1">first</div>,
          b: <div data-testid="case2">second</div>,
        }}
        fallback={<div data-testid="fallback">fallback</div>}
      />,
    );

    expect(screen.queryByTestId("case1")).toBeNull();
    expect(screen.queryByTestId("case2")).toBeNull();
    expect(screen.queryByTestId("fallback")).toBeInTheDocument();
  });

  it("should render fallback if caseBy is empty", () => {
    render(
      <SwitchCase
        match={"a"}
        caseBy={{}}
        fallback={<div data-testid="fallback">fallback</div>}
      />,
    );

    expect(screen.queryByTestId("case1")).toBeNull();
    expect(screen.queryByTestId("case2")).toBeNull();
    expect(screen.queryByTestId("fallback")).toBeInTheDocument();
  });

  it("should render nothing if no case matches and fallback is not provided", () => {
    const { container } = render(
      <SwitchCase
        match={"nonexistent"}
        caseBy={{
          a: <div data-testid="case1">first</div>,
          b: <div data-testid="case2">second</div>,
        }}
      />,
    );

    expect(screen.queryByTestId("case1")).toBeNull();
    expect(screen.queryByTestId("case2")).toBeNull();
    expect(container).toBeEmptyDOMElement();
  });

  it("should render fallback if match is null or undefined", () => {
    render(
      <SwitchCase
        match={null}
        caseBy={{
          a: <div data-testid="case1">first</div>,
        }}
        fallback={<div data-testid="fallback">fallback</div>}
      />,
    );

    expect(screen.queryByTestId("case1")).toBeNull();
    expect(screen.queryByTestId("fallback")).toBeInTheDocument();
  });

  it("should handle React Fragments in caseBy and fallback", () => {
    render(
      <SwitchCase
        match={"a"}
        caseBy={{
          a: (
            <>
              <div data-testid="case1">first</div>
              <div data-testid="case1-extra">extra</div>
            </>
          ),
        }}
        fallback={
          <>
            <div data-testid="fallback">fallback</div>
          </>
        }
      />,
    );

    expect(screen.queryByTestId("case1")).toBeInTheDocument();
    expect(screen.queryByTestId("case1-extra")).toBeInTheDocument();
    expect(screen.queryByTestId("fallback")).toBeNull();
  });
});
