import { isExists } from './utils'

export default function (value: string, count: number): string {
  if (!isExists(value)) {
    return ''
  }

  return value.length < count ? value : value.slice(0, count) + '...'
}
