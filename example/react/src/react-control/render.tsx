import { FC, Fragment } from "react";

/**
 *
 *
 * */
export const Render: FC = ({ children }) => {
  if (typeof children === "function") {
    return <Fragment>{children()}</Fragment>;
  }

  return <Fragment>{children}</Fragment>;
};
