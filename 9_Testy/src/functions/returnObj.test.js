import { returnObj } from "./returnObj";

test("Is object good prepared", () => {
    expect(returnObj()).toEqual({
        name: "Szogi",
        age: 11,
        paws: 4,
        isBest: true
    });
});
