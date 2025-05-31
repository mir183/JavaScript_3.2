class Laptop {
    constructor(id, name, ram) {
        this.id = id;
        this.name = name;
        this.ram = ram;
    }
}

const laptop1 = new Laptop(1, 'Dell', 8);
const laptop2 = new Laptop(2, 'HP', 16);
const laptop3 = new Laptop(3, 'MacBook', 32);

const laptops = [laptop1, laptop2, laptop3];
for (const i of laptops) {
    console.log(`ID: ${i.id}, Name: ${i.name}, RAM: ${i.ram}GB`);
}