import lowercase from "../../src/lib/lowercase";
import uppercase from "../../src/lib/uppercase";
import capitalize from "../../src/lib/capitalize";
import titlecase from "../../src/lib/titlecase";
import slug from "../../src/lib/slug";
import truncate from "../../src/lib/truncate";
import cut from "../../src/lib/cut";
import remove from "../../src/lib/remove";
import remove_first from "../../src/lib/remove-first";
import replace from "../../src/lib/replace";
import replace_first from "../../src/lib/replace-first";
import append from "../../src/lib/append";
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
