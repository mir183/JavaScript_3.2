class House {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

const houses = [
    new House(1, 'Villa', 500000),
    new House(2, 'Apartment', 300000),
    new House(3, 'Cottage', 200000)
];

houses.forEach(house => {
    console.log(`ID: ${house.id}, Name: ${house.name}, Price: $${house.price}`);
});
