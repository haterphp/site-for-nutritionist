import type { Builtin } from '../builtin'

type DeepPartial<T> = T extends Error
  ? Required<T>
  : T extends Builtin
    ? T
    : T extends object
      ? {[K in keyof T]-?: DeepPartial<T[K]> }
      : Partial<T>

export type { DeepPartial }
