export default function orderByProps(obj, order) {
  const orderedProps = [];
  const unorderedProps = [];

  for (const prop in obj) {
    if (order.includes(prop)) {
      orderedProps.push({ key: prop, value: obj[prop] });
    } else {
      unorderedProps.push({ key: prop, value: obj[prop] });
    }
  }

  orderedProps.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
  unorderedProps.sort((a, b) => a.key.localeCompare(b.key));

  return orderedProps.concat(unorderedProps);
}
