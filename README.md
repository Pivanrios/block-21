# Classes and methods
## Classes
Classes are useful to save time when you write certain code.
They are a type of blueprint or template that allows us to create objects with different properties and methods.

To create a class we need the ```class``` keyword followed by the ClassName starting with a capital letter. Inside our body we add a constructor function that will take all the properties we want to add and we use the `this` keyword to let our constructor know we are talking about our current object.

#### Example:
```
class Dog{
    constructor(name, years){
        this.name = name;
        this.year = year;
    }
}// we declare a new variable and use the new keyword to create a instance of the class.
const object = new Example("Pedro", 26);
```
### Keywords
* class
* constructor()
* this
* new

## Subclasses
Subclasses are classes that inherit different properties. They use the ```extends``` keyword to know form which class they will inherit their properties and methods. And inside our body constructor we add the ```super``` keyword to now which attributes to share.

### Example:
```
class Sheppard extends Dog{
    constructor(name, years, color)
    super(name, years);
    this.color = color;
}
```

### Keywords
* extends
* super

## Methods
Methods are functions that give functionality to our objects. They help us to 
change or use our attributes and give output to our console or GUI.

