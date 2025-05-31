class Animal {
    constructor(id, name, color) {
        this.id = id;
        this.name = name;
        this.color = color;
    }
}

class Cat extends Animal {
    constructor(id, name, color, sound) {
        super(id, name, color);
        this.sound = sound;
    }
}

const cat = new Cat(1, 'Persian', 'White', 'Meow');
console.log(`ID: ${cat.id}, Name: ${cat.name}, Color: ${cat.color}, Sound: ${cat.sound}`);