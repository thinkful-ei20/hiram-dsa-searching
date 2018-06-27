function serial(data, item, count = 1) {
  if (!data.length) return [null, count]
  if (item === data[0]) return [data[0], count]
  return serial(data.slice(1), item, count + 1)
}

export default serial
