import { Chalk } from 'chalk'
import { Unionize, Omit, FunctionKeys } from 'utility-types'

export type Colors = FunctionKeys<Chalk>
export type ColorsProps = Omit<{
  [key in Colors]: boolean
}, 'constructor' | 'hidden'>

export type ColorOption = Unionize<ColorsProps>

export const colorToObject = (color: Colors) => ({ [color]: true })