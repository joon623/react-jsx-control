import { FC, PropsWithChildren, ReactNode } from "react";

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

export type When = boolean;

export type ConditionalComponentProps<P = NonNullObject> = P &
  PropsWithChildren<{ when: When; fallback?: ReactNode }>;

export type ConditionalComponentPropsWithOutFallback<P = NonNullObject> = P &
  PropsWithChildren<{ when: When }>;

export type FCWithImplicitChildren = FC;
