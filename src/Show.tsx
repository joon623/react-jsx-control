import { Fragment, ReactNode } from "react";
import { BooleanLike, FCWithImplicitChildren } from "./types.ts";
import { render } from "./render.tsx";

/**
 * If Show is true, render the children, otherwise render the fallback
 * */
export const Show: FCWithImplicitChildren<{
  when: BooleanLike;
  fallback?: ReactNode;
}> = ({ children, when, fallback }) => {
  return <Fragment>{when ? render({ children }) : fallback}</Fragment>;
};
