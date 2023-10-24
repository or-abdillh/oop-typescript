class Customer {
    constructor() {
        console.info("create new customer")
    }
}

class Order {
    constructor() {
        console.info("create new order")
    }
}

describe('Name of the group', () => {
    it('should be create class ', () => {
        const customer: Customer = new Customer()
        const order: Order = new Order()
    });

    it('should be create constructor', () => {
        new Customer()
        new Order()
    });
});