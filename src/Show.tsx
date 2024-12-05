import { FC, Fragment } from "react";
import { ConditionalComponentProps } from "./types";

export const Show: FC<ConditionalComponentProps> = ({
  children,
  condition,
}) => {
  if (!children) {
    return null;
  }

  if (condition) {
    return <Fragment>{children}</Fragment>;
  }
};
