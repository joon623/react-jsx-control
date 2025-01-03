import { Fragment } from "react";
import { FCWithImplicitChildren } from "./types.ts";

/**
 * Renders a React component that accepts children as a prop.
 *
 * This component supports `children` as:
 * - A ReactNode, which is rendered directly.
 * - A function, which is invoked to produce the rendered output.
 * - Undefined or null, which results in rendering nothing.
 *
 * @param {FCWithImplicitChildren} props - The component props containing `children`.
 * @returns {JSX.Element} A React fragment containing the rendered output.
 */
export const render: FCWithImplicitChildren = (props) => {
  if (typeof props.children === "function") {
    return <Fragment>{props.children()}</Fragment>;
  }

  return <Fragment>{props.children}</Fragment>;
};
