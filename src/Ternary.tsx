import { FC, ReactNode } from "react";
import { When } from "./types.ts";

/**
 * Renders one of the provided components (`truthy` or `falsy`) based on a given condition.
 *
 * This component evaluates the `when` prop to determine which ReactNode should be rendered:
 * - If `when` is **truthy**, it renders the `truthy` prop.
 * - If `when` is **falsy**, it renders the `falsy` prop.
 * - If `when` is **null** or **undefined**, it renders the optional `fallback` prop, defaulting to `null`.
 *
 * @example
 * ```typescript
 * <Ternary
 *   when={true}
 *   truthy={<span>Truthy</span>}
 *   falsy={<span>Falsy</span>}
 * />
 * ```
 *
 * @param {When} when - Condition to evaluate. Accepts values like `boolean`, `string`, `number`, `null`, `undefined`, or a function returning any of these types.
 * @param {ReactNode} truthy - Component to render if the condition evaluates to true.
 * @param {ReactNode} falsy - Component to render if the condition evaluates to false.
 * @param {ReactNode} [fallback=null] - Optional component to render if the condition is `undefined` or `null`.
 *
 * @returns {JSX.Element | null} Rendered ReactNode based on the evaluation of the `when` prop.
 */

export const Ternary: FC<{
  when: When;
  truthy: ReactNode;
  falsy: ReactNode;
  fallback?: ReactNode;
}> = ({ when, truthy, falsy, fallback }) => {
  if (when === undefined || when === null) {
    return fallback;
  }

  return when ? truthy : falsy;
};
