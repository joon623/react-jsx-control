/**
 * A Utility function that maps over an array and transforms its elements.
 *
 * @template T - The type of the elements in the input array.
 * @template U - The type of the elements in the output array after applying the callback.
 *
 * @param {T[]} array - The array to be mapped over. Each element will be passed to the callback function.
 * @param {(item: T, index: number) => U} callback - A function that takes an element of the array and its index,
 * and returns the transformed value for the new array.
 *
 * @returns {U[]} - A new array containing the transformed elements. If the input array is empty, an empty array is returned.
 *
 * @example
 * // example 1: Mapping numbers to their square
 * const numbers = [2,4,8]
 * mapToArray(numbers, (item) => {
 *   return item * item
 * }) // [ 4, 16, 64 ]
 *
 * @example
 * // example 2: Mapping an array of objects to an array of their names
 * const people = [{name: 'John'}, {name: 'Jane'}, {name: 'Doe'}]
 * mapToArray(people, (person) => {
 *  return person.name
 *  }) // ['John', 'Jane', 'Doe']
 *
 * */
export const mapToArray = <T, U>(
  array: T[],
  callback: (item: T, index: number) => U,
) => {
  if (array.length === 0) {
    return [];
  }

  return array.map(callback);
};
