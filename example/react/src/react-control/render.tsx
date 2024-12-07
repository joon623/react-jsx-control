import { Fragment } from "react";
import { FCWithImplicitChildren } from "./types.ts";

/**
 * Render a React Component
 * */
export const render: FCWithImplicitChildren = (props) => {
  if (typeof props.children === "function") {
    return <Fragment>{props.children()}</Fragment>;
  }
  console.log(props.children);

  return <Fragment>{props.children || null}</Fragment>;
};
