import { FC, Fragment } from "react";
import { ConditionalComponentProps } from "./types.ts";

export const Show: FC<ConditionalComponentProps> = ({
  children,
  condition,
  fallback,
}) => {
  if (!children) {
    return null;
  }

  if (condition) {
    return <Fragment>{children}</Fragment>;
  } else {
    return <Fragment>{fallback}</Fragment>;
  }
};
