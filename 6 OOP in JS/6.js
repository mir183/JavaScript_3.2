class Bottle {
    open() {
        throw new Error("Method 'open()' must be implemented.");
    }

    static create() {
        return new CokeBottle();
    }
}

class CokeBottle extends Bottle {
    open() {
        console.log('Coke bottle is opened');
    }
}

function main() {
    const bottle = Bottle.create();
    bottle.open();
}

main();