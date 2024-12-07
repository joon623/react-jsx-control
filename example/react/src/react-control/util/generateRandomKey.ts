/**
 *
 * A Utility function that generates a random key.
 *
 * @example
 * const randomKey = generateRandomKey() // 'f7b3d1b7-3b7b-4b7b-8b7b-7b3b7b3b7b3b'
 *
 * */
export const generateRandomKey = () => {
  return crypto.randomUUID();
};
