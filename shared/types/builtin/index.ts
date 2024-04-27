import type { Primitive } from '../primitive'
// eslint-disable-next-line @typescript-eslint/ban-types
type Builtin = Primitive | Function | Date | Error | RegExp

export type { Builtin }
