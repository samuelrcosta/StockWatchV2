export function getAlphaKey() {
  const keys = process.env.ALPHA_KEYS;
  const keysArray = keys.split(',');

  return keysArray[Math.floor(Math.random() * keysArray.length)];
}
