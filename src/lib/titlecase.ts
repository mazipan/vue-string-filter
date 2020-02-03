import { isExists } from './utils'

export default function (value: string): string {
  if (!isExists(value)) {
    return ''
  }

  return value.replace(/\w\S*/g, (txt: string): string => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}
