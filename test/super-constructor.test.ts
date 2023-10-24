describe('Super constructor', () => {

    class Person {
        name: string

        constructor(name: string) {
            this.name = name
        }
    }

    class Employee extends Person {
        department: string

        constructor(name: string, department: string) {
            super(name)
            this.department = department
        }
    }

    it('should support', () => {
        const employee = new Employee("John", "Marketing")

        expect(employee.name).toBe("John")
        expect(employee.department).toBe("Marketing")
    });

});