const groupBy = (array: [], key: any) => {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);

    return result;
  }, {})
}

export default groupBy;
