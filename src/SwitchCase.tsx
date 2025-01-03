import { ReactNode } from "react";

/**
 * SwitchCase Component
 */
export const SwitchCase = <T extends string | number>({
  match,
  caseBy,
  fallback = null,
}: {
  match: T;
  caseBy: Record<T, ReactNode>;
  fallback?: ReactNode;
}) => {
  return caseBy[match] || fallback;
};
