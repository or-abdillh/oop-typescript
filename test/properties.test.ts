describe('properties', () => {

    class Customer {

        readonly id: number
        name: string
        age?: number

        constructor(id: number, name: string) {
            this.id = id
            this.name = name
        }

        sayHello(name: string): string {
            return `Hello ${name} my name is ${this.name}`
        }

    }

    it('should can have properties', () => {

        const customer = new Customer(1, "John")

        customer.age = 23

        console.log(customer.id)
        console.log(customer.name)
        console.log(customer.age)
    });

    it('should can have method', () => {

        const customer = new Customer(2, "Budi")

        console.info(customer.sayHello("Alex"))
    });
});