import { PropsWithChildren, ReactNode } from "react";

export type BooleanLike =
  | boolean
  | string
  | number
  | null
  | undefined
  | ExtendablePromise<any>;

export interface ExtendablePromise<T> extends Promise<T> {
  [index: string]: any;
}

export type NonNullObject = {} & object;

export type When = (() => BooleanLike) | BooleanLike;

export type ConditionalComponentProps<P = NonNullObject> = P &
  PropsWithChildren<{ when: When; fallback?: ReactNode }>;
