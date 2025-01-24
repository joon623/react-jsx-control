import { Fragment, ReactNode } from "react";
import { BooleanLike, FCWithImplicitChildren, When } from "./types.ts";
import { render } from "./render.tsx";

/**
 * Conditionally renders its children or a fallback based on the `when` condition.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {BooleanLike} props.when - A boolean-like value that determines whether to render the `children` or the `fallback`.
 * @param {ReactNode} [props.fallback] - A React node to render when `when` is falsy. If not provided, nothing is rendered.
 * @param {ReactNode} [props.children] - The React node(s) to render when `when` is truthy.
 * @returns {ReactNode} A React fragment containing either the `children` or the `fallback`.
 *
 * @example
 * // Example usage:
 * <Show when={true} fallback={<div>No content available</div>}>
 *   <div>Content to show</div>
 * </Show>
 */
export const Show: FCWithImplicitChildren<{
  when: When;
  fallback?: ReactNode;
}> = ({ children, when, fallback }) => {
  return <Fragment>{when ? render({ children }) : fallback}</Fragment>;
};
