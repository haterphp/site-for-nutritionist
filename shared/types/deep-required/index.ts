import type { Builtin } from '../builtin'

type DeepRequired<T> = T extends Error
  ? Required<T>
  : T extends Builtin
    ? T
    : T extends object
      ? {[K in keyof T]-?: DeepRequired<T[K]> }
      : Required<T>

export type { DeepRequired }
