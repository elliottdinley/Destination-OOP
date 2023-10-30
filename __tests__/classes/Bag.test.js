const Bag = require("../../classes/Bag.js");

describe("Bag Class", () => {
    test("Should create an instance of the Bag class", () => {
        const bag = new Bag(5, "bag-001");
        expect(bag).toBeInstanceOf(Bag);
    });
    
    test("Should correctly assign weight and id", () => {
        const weight = 7;
        const id = "bag-002";
        const bag = new Bag(weight, id);
        expect(bag.weight).toBe(weight);
        expect(bag.id).toBe(id);
    });
    
    test("Should initially have owner as null", () => {
        const bag = new Bag(3, "bag-003");
        expect(bag.getOwner()).toBeNull();
    });
    
    test("Should assign owner to a Person", () => {
        const bag = new Bag(4, "bag-004");
        const person = { name: "John", age: 30 };
        bag.assignOwner(person);
        expect(bag.getOwner()).toBe(person);
    });
});
