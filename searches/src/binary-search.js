function binary(data, item, count = 1) {
  if (!data.length) return [null, count]
  const midIndex = Math.floor(data.length / 2)
  const midItem = data[midIndex]
  if (item === midItem) return [midItem, count]
  if (item < midItem) return binary(data.slice(0, midIndex), item, count + 1)
  if (midItem < item) return binary(data.slice(midIndex), item, count + 1)
}

export default binary
