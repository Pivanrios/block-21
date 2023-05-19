# Classes and methods
## Classes
Classes are useful to save time when you write certain code.
They are a type of blueprint or template that allows us to create objects with 
different properties and methods.

### ** keywords**
* class
* ClassName 
* constructor()
* this
* new
* extends
* super
* prototype


To create a class we need the class keyword followed by the ClassName starting with a capital letter.
Inside our body we add a constructor function that will take all the properties we want to add and we use the this keyword to let our constructor know we are talking about our current object.

#### Example:
class Example{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}// we declare a new variable and use the new keyword to create a instance of the class.
const object = new Example("Pedro", 26);



## Methods
Methods are functions that give functionality to our objects. They help us to 
change or use our attributes and give output to our console or GUI.

