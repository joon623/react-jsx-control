import { Children, FC } from "react";

export const Switch: FC = ({ children }) => {
  if (!children) {
    return null;
  }

  const childArray = Children.toArray(children);
  const correct = childArray.find((child) => {
    return child.props.when;
  });

  return <>{correct}</>;
};
