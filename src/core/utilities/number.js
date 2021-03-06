export function addComma (num) {
  let n = num.toString();
  const pattern = /(-?\d+)(\d{3})/;

  while (pattern.test(n)) {
    n = n.replace(pattern, '$1,$2');
  }

  return n;
}
