describe('inheritance', () => {

    // parent class
    class Employee {

        name: string

        constructor(name: string) {
            this.name = name
        }
    }

    // first child class
    class Manager extends Employee {

    }

    // second child class
    class Director extends Manager {

    }

    it('should support inheritance', () => {

        const employee = new Employee("John")
        const manager = new Manager("Doe")
        const director = new Director("Smith")

        expect(employee.name).toBe("John")
        expect(manager.name).toBe("Doe")
        expect(director.name).toBe("Smith")
    });
});