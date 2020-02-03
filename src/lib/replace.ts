import { isExists } from './utils'

export default function (value: string, replacement: string): string {
  if (!isExists(value)) {
    return ''
  }

  return value.replace(new RegExp(value, 'g'), replacement)
}
