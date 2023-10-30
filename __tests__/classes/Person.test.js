const Person = require("../../classes/Person.js");
const Bag = require("../../classes/Bag.js");

describe("Person Class", () => {
    test("Should create an instance of the Person class", () => {
        const person = new Person("John Doe", "Paris");
        expect(person).toBeInstanceOf(Person);
    });
    
    test("Should correctly assign name and destination", () => {
        const name = "Alice";
        const destination = "New York";
        const person = new Person(name, destination);
        expect(person.name).toBe(name);
        expect(person.destination).toBe(destination);
    });
    
    test("Should initialize bags as an empty array", () => {
        const person = new Person("Bob", "London");
        expect(person.bags).toEqual([]);
    });
    
    test("Should add a bag to the bags array", () => {
        const person = new Person("Jane", "Rome");
        const bag = new Bag(10, "bag-001");
        person.addBag(bag);
        expect(person.bags).toHaveLength(1);
        expect(person.bags[0]).toBe(bag);
    });
});
