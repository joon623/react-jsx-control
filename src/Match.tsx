import { FCWithImplicitChildren } from "./types.ts";
import { render } from "./render.tsx";

export const Match: FCWithImplicitChildren = ({ children }) => {
  if (!children) {
    return null;
  }

  return <>{render({ children })}</>;
};
