export default function filterItems(filter, items) {
    if (!filter) { return items; }
    return items.filter((p) => p.category === filter);
  }
  // https://mdn.io/array/filter