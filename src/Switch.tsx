import { Children, isValidElement, PropsWithChildren } from "react";

/**
 * Renders the first child `Match` component whose `when` condition is truthy.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {ReactNode} props.children - A list of `Match` components to evaluate.
 * @returns {JSX.Element | null} A JSX element containing the first matching `Match` component, or null if no match is found.
 *
 * @example
 * // Example usage:
 * <Switch>
 *   <Match when={false}>
 *     <div>This will not render</div>
 *   </Match>
 *   <Match when={true}>
 *     <div>This will render</div>
 *   </Match>
 * </Switch>
 *
 * @example
 * // When no condition is truthy:
 * <Switch>
 *   <Match when={false}>
 *     <div>None of these will render</div>
 *   </Match>
 * </Switch>
 */
export const Switch = ({ children }: PropsWithChildren) => {
  if (!children) {
    return null;
  }

  const childArray = Children.toArray(children);
  const correct = childArray.find((child) => {
    if (isValidElement(child)) {
      return child.props.when;
    }

    return null;
  });

  return <>{correct}</>;
};
