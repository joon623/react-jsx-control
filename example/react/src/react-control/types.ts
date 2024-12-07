import { FunctionComponent, ReactNode } from "react";

/**
 *
 * */

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

export type When = (() => BooleanLike) | BooleanLike;

/**
 * Utility type for a React component
 * */
export type NonNullObject = object;

export type CustomPropsWithChildren<P> = P & {
  children?: ReactNode | undefined | ((...args: unknown[]) => ReactNode);
};

export type FCWithImplicitChildren<P = NonNullObject> = FunctionComponent<
  CustomPropsWithChildren<P>
>;
