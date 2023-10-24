describe('Method overriding', () => {

    class Person {
        name: string

        constructor(name: string) {
            this.name = name
        }

        sayHello(name: string): string {
            return `Hello ${name} my name is ${this.name}`
        }
    }

    class Manager extends Person {

        sayHello(name: string): string {
            return `Hello ${name} my name is ${this.name}, im your manager`
        }
    }

    it('should support', () => {

        const person = new Person("Eko")
        const manager = new Manager("Eko")

        expect(person.sayHello("Adi")).toBe("Hello Adi my name is Eko")
        expect(manager.sayHello("Adi")).toBe("Hello Adi my name is Eko, im your manager")
    });

});