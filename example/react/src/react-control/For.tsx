import { FC, Fragment, ReactNode } from "react";
import { generateRandomKey } from "./util/generateRandomKey.ts";
import { mapToArray } from "./util/mapToArray.ts";

/**
 * Creates a list elements from a list
 * ```typescript
 *  export const ForExample = () => {
 *   const hamburgers = [
 *     {
 *       name: "cheese burger",
 *       price: 10000,
 *     },
 *     {
 *       name: "chicken burger",
 *       price: 13000,
 *     },
 *   ];
 *
 *   return (
 *     <main>
 *       <For each={hamburgers} fallback={<p>No items available</p>}>
 *         {({ name, price }, index) => (
 *           <div>
 *             <h1>
 *               {index + 1}. {name}
 *             </h1>
 *             <h2>{price.toLocaleString()} KRW</h2>
 *           </div>
 *         )}
 *       </For>
 *     </main>
 *   );
 * };
 * ```
 * */
export const For: FC = <T,>({
  each,
  fallback,
  children,
}: {
  each: T[];
  fallback?: ReactNode;
  children: (item: T, index: number) => ReactNode;
}) => {
  if (!each || each.length === 0) {
    return <Fragment>{fallback}</Fragment>;
  }

  return (
    <Fragment>
      {mapToArray(each, (item, index) => {
        return (
          <Fragment key={generateRandomKey()}>{children(item, index)}</Fragment>
        );
      })}
    </Fragment>
  );
};
