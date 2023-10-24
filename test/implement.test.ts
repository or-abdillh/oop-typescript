describe('implements', () => {

    interface HasName {
        name: string
    }

    interface CanSayhello {
        sayHello: (name: string) => string
    }

    class Person implements HasName, CanSayhello {

        name: string;

        constructor(name: string) {
            this.name = name
        }

        sayHello(name: string) {
            return `Hello ${name}, my name is ${this.name}`
        };
    }

    it('support implements', () => {

        const person = new Person("John Doe")

        expect(person.name).toBe("John Doe")
        expect(person.sayHello("Smith"))
            .toBe("Hello Smith, my name is John Doe")
    });
});