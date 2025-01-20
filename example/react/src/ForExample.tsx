import { For } from "../../../src";

export const ForExample = () => {
  const hamburgers = [
    {
      name: "cheese burger",
      price: 10000,
    },
    {
      name: "chicken burger",
      price: 13000,
    },
  ];

  return (
    <main>
      <For each={hamburgers} fallback={<p>No items available</p>}>
        {({ name, price }, index) => (
          <div>
            <h1>
              {index + 1}. {name}
            </h1>
            <h2>{price.toLocaleString()} KRW</h2>
          </div>
        )}
      </For>
    </main>
  );
};
