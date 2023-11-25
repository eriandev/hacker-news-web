export type GetRelativeTimeFromNow = (timestamp: number) => string

export type PrimitiveArray = string[] | number[] | boolean[]
export type HaveSameElements = (firstArray: PrimitiveArray, secondArray: PrimitiveArray) => boolean
