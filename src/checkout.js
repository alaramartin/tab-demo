// Order total for a cart: sum of price × qty, rounded to whole cents.
export function total(items) {
  const cents = items.reduce((sum, i) => sum + Math.round(i.price * 100) * i.qty, 0);
  return cents / 100;
}
