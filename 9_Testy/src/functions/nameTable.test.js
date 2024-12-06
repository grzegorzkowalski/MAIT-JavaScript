import { nameTable } from "./nameTable";

test("Contain Grzegorz", () => {
    expect(nameTable()).toContain("Grzegorz");
});

test("No contain Stefan", () => {
    expect(nameTable()).not.toContain("Stefan");
});

test("Length min 3", () => {
    expect(nameTable().length).toBeGreaterThanOrEqual(3);
});
