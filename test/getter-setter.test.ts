describe('getters and setters', () => {

    class Category {
        _name?: string

        get name() {
            if (this._name) return this._name
            else return "empty"
        }

        set name(value: string) {
            if (value.trim() !== "") this._name = value
        }
    }

    it('should support have getters and setters', () => {

        const category = new Category()

        expect(category.name).toBe("empty")

        category.name = "   "
        expect(category.name).toBe("empty")

        category.name = "food"
        expect(category.name).toBe("food")
    });
});