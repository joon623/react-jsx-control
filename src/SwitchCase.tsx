import { ReactNode } from "react";

/**
 * SwitchCase Component
 *
 * A utility component for conditional rendering in React. It renders a specific ReactNode
 * based on the `match` value. If no match is found in the `caseBy` object, it renders the
 * `fallback` component (default is `null`).
 *
 * @template T - The type of the `match` value (must be either `string` or `number`).
 *
 * @param {T} match - The value used to determine which child component to render.
 * @param {Partial<Record<T, ReactNode>>} caseBy - An object where keys are possible `match` values
 *                                                 and values are the ReactNodes to render.
 *                                                 The keys are optional (`Partial`) to allow for flexibility.
 * @param {ReactNode} [fallback=null] - A fallback ReactNode to render if the `match` value
 *                                      does not exist in `caseBy`. Defaults to `null`.
 *
 * @returns {ReactNode} - The ReactNode corresponding to the `match` value from `caseBy`,
 *                        or the `fallback` if no match is found.
 *
 * @example
 * // Example usage with string keys:
 * <SwitchCase
 *   match="a"
 *   caseBy={{
 *     a: <div>Case A</div>,
 *     b: <div>Case B</div>,
 *   }}
 *   fallback={<div>Default case</div>}
 * />
 *
 * // Example usage with number keys:
 * <SwitchCase
 *   match={1}
 *   caseBy={{
 *     1: <div>Case 1</div>,
 *     2: <div>Case 2</div>,
 *   }}
 *   fallback={<div>No match</div>}
 * />
 */
export const SwitchCase = <T extends string | number>({
  match,
  caseBy,
  fallback = null,
}: {
  match: T;
  caseBy: Partial<Record<T, ReactNode>>;
  fallback?: ReactNode;
}) => {
  return caseBy[match] || fallback;
};
