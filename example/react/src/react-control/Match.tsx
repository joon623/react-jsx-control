import { FC } from "react";
import { ConditionalComponentPropsWithOutFallback } from "./types.ts";

export const Match: FC<ConditionalComponentPropsWithOutFallback> = ({
  children,
}) => {
  if (!children) {
    return null;
  }

  return <>{children}</>;
};
