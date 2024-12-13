export function className(classes) {
  let result = '';

  for (let key in classes) {
    if (classes[key]) {
      result += ` ${key}`;
    }
  }

  return result;
}
