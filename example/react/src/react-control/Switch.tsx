import { Children, FC, isValidElement } from "react";

export const Switch: FC = ({ children }) => {
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
