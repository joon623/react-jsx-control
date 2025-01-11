import { ReactNode } from "react";

/**
 * SwitchCase Component
 *
 * A component that conditionally renders a child component based on a `match` value.
 * This is a utility component for cleaner and more readable conditional rendering in React.
 *
 * @template T - The type of the `match` value, which can be a string or number.
 *
 * @param {T} match - The value used to determine which child component to render.
 * @param {Record<T, ReactNode>} caseBy - An object mapping possible `match` values to React nodes.
 *                                         The keys should correspond to possible `match` values,
 *                                         and the values are the components or elements to render.
 * @param {ReactNode} [fallback=null] - A fallback component or element to render if the `match`
 *                                      value does not exist in the `caseBy` object. Defaults to `null`.
 *
 * @returns {ReactNode} - The child component corresponding to the `match` value from `caseBy`,
 *                        or the fallback component if no match is found.
 *
 * @example
 * // Example usage:
 * <SwitchCase
 *   match={"a"}
 *   caseBy={{
 *     a: <div>Case A</div>,
 *     b: <div>Case B</div>,
 *   }}
 *   fallback={<div>Default case</div>}
 * />
 */
export const SwitchCase = <T extends string | number>({
  match,
  caseBy,
  fallback = null,
}: {
  match: T;
  caseBy: Record<T, ReactNode>;
  fallback?: ReactNode;
}) => {
  return caseBy[match] || fallback;
};
