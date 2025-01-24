import { FCWithImplicitChildren, When } from "./types.ts";
import { render } from "./render.tsx";

/**
 * A conditional rendering wrapper for use within the `Switch` component.
 *
 * @component
 * @template Props
 * @param {Object} props - The properties object.
 * @param {boolean} props.when - A condition to determine whether the child elements should be rendered.
 * @param {ReactNode} [props.children] - The React node(s) to render if `when` is truthy.
 * @returns {JSX.Element | null} A JSX element containing the rendered children, or null if no children exist or the condition is falsy.
 *
 * @example
 * // Example usage:
 * <Switch>
 *   <Match when={true}>
 *     <div>This will render</div>
 *   </Match>
 *   <Match when={false}>
 *     <div>This will not render</div>
 *   </Match>
 * </Switch>
 */
export const Match: FCWithImplicitChildren<{ when: When }> = ({ children }) => {
  if (!children) {
    return null;
  }

  return <>{render({ children })}</>;
};
