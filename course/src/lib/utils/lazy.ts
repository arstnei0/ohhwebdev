import { Promisable } from "type-fest"

export type Lazy<T> = () => Promisable<T>
export type Laziable<T> = T | Lazy<T>
