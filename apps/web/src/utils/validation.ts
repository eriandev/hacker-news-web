import type { HaveSameElements } from 'types/web/utils'

export const haveSameElements: HaveSameElements = (firstArray, secondArray) => {
  const haveSameSize = firstArray.length === secondArray.length
  return haveSameSize && firstArray.every((element, index) => element === secondArray[index])
}
