import { isExists } from './utils'

export default function (value: string): string {
  if (!isExists(value)) {
    return ''
  }

  return value
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, '-and-')
    .replace(/[\s\W]/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '-')
}
