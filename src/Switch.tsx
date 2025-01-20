import { Children, isValidElement, PropsWithChildren } from "react";

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
