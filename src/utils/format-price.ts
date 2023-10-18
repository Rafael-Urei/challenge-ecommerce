export function formatPrice(price: number, descount: number) {
  if (descount) {
    let newValue = price - (price * descount) / 100;
    return newValue;
  } else {
    return price;
  }
}
