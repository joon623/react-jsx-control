import { FC, Fragment } from "react";
import { ConditionalComponentProps } from "./types.ts";

export const Show: FC<ConditionalComponentProps> = ({
  children,
  when,
  fallback,
}) => {
  if (!children) {
    return null;
  }

  if (when) {
    return <Fragment>{children}</Fragment>;
  } else {
    return <Fragment>{fallback}</Fragment>;
  }
};
