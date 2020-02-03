export function isExists<T> (value: T | undefined | null): value is T {
  return (value as T) !== undefined && (value as T) !== null
}
