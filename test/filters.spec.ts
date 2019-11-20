import lowercase from "../lib/filters/lowercase";
import uppercase from "../lib/filters/uppercase";
import capitalize from "../lib/filters/capitalize";
import titlecase from "../lib/filters/titlecase";
import slug from "../lib/filters/slug";
import truncate from "../lib/filters/truncate";
import cut from "../lib/filters/cut";
import remove from "../lib/filters/remove";
import remove_first from "../lib/filters/remove-first";
import replace from "../lib/filters/replace";
import replace_first from "../lib/filters/replace-first";
import append from "../lib/filters/append";
import { getTextInput } from "./utils";

describe("filters", () => {
  test("lowercase", () => {
    const text: string = lowercase(getTextInput("lowercase"));
    expect(text).toBe("string for lowercase filter");
  });

  test("uppercase", () => {
    const text: string = uppercase(getTextInput("uppercase"));
    expect(text).toBe("STRING FOR UPPERCASE FILTER");
  });

  test("capitalize", () => {
    const text: string = capitalize(getTextInput("capitalize"));
    expect(text).toBe("String for capitalize filter");
  });

  it("titlecase", () => {
    const text: string = titlecase(getTextInput("titlecase"));
    expect(text).toBe("String For Titlecase Filter");
  });

  it("slug", () => {
    const text: string = slug(getTextInput("slug"));
    expect(text).toBe("string-for-slug-filter");
  });

  it("truncate", () => {
    const text: string = truncate(getTextInput("truncate"), 6);
    expect(text).toBe("string...");
  });

  it("cut", () => {
    const text: string = cut(getTextInput("cut"), 6);
    expect(text).toBe("string");
  });

  it("remove", () => {
    const text: string = remove(getTextInput("remove"), "remove ");
    expect(text).toBe("string for filter");
  });

  it("remove_first", () => {
    const text: string = remove_first(
      getTextInput("remove first remove first"),
      "remove first "
    );
    expect(text).toBe("string for remove first filter");
  });

  it("replace", () => {
    const text: string = replace(getTextInput("replace"), "replaced");
    expect(text).toBe("replaced");
  });

  it("replace_first", () => {
    const text: string = replace_first(
      getTextInput("replace first"),
      "replaced"
    );
    expect(text).toBe("replaced");
  });

  it("append", () => {
    const text: string = append(getTextInput("append"), " is appended");
    expect(text).toBe("string for append filter is appended");
  });
});
