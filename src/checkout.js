// Order total for a cart: sum of price × qty.
export function total(items) {
  return items.reduce((sum, i) => sum + i.price * i.qty, 0);
}
