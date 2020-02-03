import { isExists } from './utils'

export default function (value: string, target: string): string {
  if (!isExists(value)) {
    return ''
  }

  return value.replace(new RegExp(target, 'g'), '')
}
