export function randomElement(array:unknown[]) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
