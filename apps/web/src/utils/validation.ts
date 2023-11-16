type PrimitiveArray = string[] | number[] | boolean[]

export function haveSameElements (firstArray: PrimitiveArray, secondArray: PrimitiveArray): boolean {
  const haveSameSize = firstArray.length === secondArray.length
  return haveSameSize && firstArray.every((element, index) => element === secondArray[index])
}
