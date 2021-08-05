const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function adder(accumulator, startingValue) {
  return accumulator + startingValue
}

const totalBatteries = batteryBatches.reduce(adder, 0)
