class Camera {
    constructor(id, brand, color, price) {
        this._id = id;
        this._brand = brand;
        this._color = color;
        this._price = price;
    }

    get id() {
        return this._id;
    }

    get brand() {
        return this._brand;
    }

    get color() {
        return this._color;
    }

    get price() {
        return this._price;
    }

    set id(id) {
        this._id = id;
    }

    set brand(brand) {
        this._brand = brand;
    }

    set color(color) {
        this._color = color;
    }

    set price(price) {
        this._price = price;
    }
}

const camera1 = new Camera(1, 'Canon', 'Black', 500.0);
const camera2 = new Camera(2, 'Nikon', 'Gray', 600.0);
const camera3 = new Camera(3, 'Sony', 'White', 700.0);

const cameras = [camera1, camera2, camera3];
for (const camera of cameras) {
    console.log(`ID: ${camera.id}, Brand: ${camera.brand}, Color: ${camera.color}, Price: $${camera.price}`);
}