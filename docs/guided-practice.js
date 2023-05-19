function Dog(type, name, bark){
    this.type = type;
    this.name = name;
    this.bark = "wow";
}
class Cat{
    constructor(eyes, color, type){
        this.eyes = eyes;
        this.color = color;
        this.type = type;
    }
}

//create a class constructor
class Home{
    constructor(rooms, bathrooms, squareFeet){
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        this.squareFeet = squareFeet;
    }
    //method
    logHome() {
        console.log(`This house has ${this.rooms}, ${this.bathrooms} bathrooms, and has ${this.squareFeet} sqt.`);
    }
}

//Create a new object
const apt = new Home(2,1,540);
console.log("Number of rooms:",apt.rooms);
apt.logHome()

//Create a subclass by inheriting a class
class SingleFamilyHome extends Home{
    constructor(rooms, bathrooms, squareFeet, yardSize){
        super(rooms, bathrooms, squareFeet);
        this.yardSize = yardSize;
    }
    lotSize(){
        const totalSize = this.squareFeet + this.yardSize;
        return totalSize
    }
    getInfo(){//             We use the this key word to access the current object properties and methods
        console.log(`This house has ${this.rooms} rooms, ${this.bathrooms} bathrooms, and a total size of ${this.lotSize()} square feet.`)
    }
}

const villas = new SingleFamilyHome(3,2,750,250)
console.log("Yard size:", villas.yardSize)
villas.getInfo()