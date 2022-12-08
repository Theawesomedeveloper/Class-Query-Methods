// ASSIGNMENT !


// Creating a new Class
class Car{
    engine_type = "Petrol Engine"
    number_of_wheel = 4
    has_windscreen = true
    has_steering_wheel = true
    number_of_doors = 4
    
    startCar(){
       console.log("Car has started");
    } 

    // Static properties
    static engine = true
    static has_headlamps = true


    // static methods
    static turnOnWiper(){
        console.log("Wiper has been turned on");
        
    }

}

// creating objects out of our class
const toyota = new Car();
const ford = new Car();



/*======================= ACCESSING CLASSES ==============*/

// 1.   Accessing a class static property
console.log(Car.engine); // we use the class name instead of the object 

//2.   Accessing a class static Method
console.log(Car.turnOnWiper()); // we use the class name instead of the object 

//3.    Accessing a class 
console.log(Car); // note that this will return only the static methods and properties


/*======================= ACCESSING OBJECTS ==============*/
// 1.     Accessing an objects properties
console.log(toyota.engine_type); // this will return Petrol Engine

//2.      Accessing an objects method
console.log(ford.startCar());



/*======================= CREATING CLASSES WITH CONSTRUCTOR ==============*/
// to be able to do this we need to give our class a constrtor 

class Student {
    constructor (name, age, level, gender){
        this.name = name
        this.age = age
        this.level = level
        this.gender = gender
        // The this keyword will point to the method that called it and in this case it will be the Student class
    }
    // SETTERS AND GETTERS

    setAge(newAge){
        this.age = newAge
    }

    getGender(){
        console.log(this.gender)
    }

}

/*======================= CREATING OBJECTS WITH CUSTOM PROPERTIES ==============*/

const jonathan = new Student ("Jonathan", 15, 200, "Male");

const bliss = new Student ("Bliss", 23, 400, "female");

console.log(jonathan);// This will lis all properties of the jonathan object

/* USING THE SET AND GET METHODS */

jonathan.setAge(23) // This will update the age for the jonathan's object 
console.log(jonathan.age)// this will return 23

bliss.getGender() // This willreturn the gender of bliss object












