import { FC, ReactNode } from "react";
import { When } from "./types.ts";

/**
 * Render Truthy or Falsy components based on a condition
 *
 * @example
 * ```typescript
 * <Ternary when={true} truthy={<span>Truthy</span>} falsy={<span>Falsy</span>} />
 * ```
 * */
export const Ternary: FC<{
  when: When;
  truthy: ReactNode;
  falsy: ReactNode;
  fallback?: ReactNode;
}> = ({ when, truthy, falsy, fallback = null }) => {
  if (when === undefined || when === null) {
    return fallback;
  }

  return when ? truthy : falsy;
};
