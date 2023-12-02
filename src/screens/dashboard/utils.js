export function checkSaveCondition(amount) {
  if (!amount) return { result: false, msg: "empty" };
  const values = Object.values(amount);
  const otp = values.some((item) => !item || isNaN(item));
  if (otp) {
    return { result: false, msg: "empty element" };
  }

  const rqamount = values.filter((_, ind) => ind !== 0);
  const sortedArr = [...rqamount].sort((a, b) => b - a);

  if (
    amount.category_6 < "99" ||
    amount.category_7 < "79" ||
    amount.category_8 < "59" ||
    amount.category_9 < "39" ||
    amount.category_10 < "19"
  ) {
    return { result: false, msg: "min criteria doesnt meet" };
  } else if (JSON.stringify(rqamount) !== JSON.stringify(sortedArr)) {
    return { result: false, msg: "not in sorted form" };
  }
  return { result: true, msg: "" };
}
