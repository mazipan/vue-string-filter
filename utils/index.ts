import { join } from "path";

export const getAbsolutePath = function(folderName: string): string {
  return join(__dirname, "../", folderName);
};

export function isExists<T>(value: T | undefined | null): value is T {
  return (value as T) !== undefined && (value as T) !== null;
}
