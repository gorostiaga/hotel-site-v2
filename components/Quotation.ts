export const getQuotation = (people: string | undefined, nigths: string) => {
  //here I need to call the BE API
  //For now I will hard code the price.

  const price = 200;

  if (people != undefined) {
    const totalPrice = price * +people * +nigths;
    return totalPrice.toString();
  }
  return "";
};
