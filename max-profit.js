function maxProfits(arr, shares = 1000) {
  let min = [0, Number.POSITIVE_INFINITY] // [index, value]
  for (let i = 0; i < arr.length; i++) {
    min = arr[i] < min[1] ? [i, arr[i]] : min
  }

  let max = Number.NEGATIVE_INFINITY
  for (let i = min[0]; i < arr.length; i++) {
    max = max < arr[i] ? arr[i] : max
  }

  const profit = max * shares - min[1] * shares
  console.log(`Assuming ${shares} purchases and sold. Max profit is ${profit}`)
}

function main() {
  const arr = [128, 97, 121, 123, 98, 97, 105]
  maxProfits(arr, 100)
}

if (require.main === module) main()
