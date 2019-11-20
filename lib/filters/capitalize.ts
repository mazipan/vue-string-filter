import { isExists } from "../../utils";

export default function(value: string): string {
  if (!isExists(value)) {
    return "";
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
}
