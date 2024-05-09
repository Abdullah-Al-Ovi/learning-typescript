{
    class Animal{
        
        constructor(public name:string,public species:string){}
        makesSound(){
            console.log("Animal makes sound");
            
        }
    }
    class Cat extends Animal{
        constructor(name:string,species:string){
            super(name,species)
        }
        meow(){
            console.log("Cat meows");
        }
    }
    class Dog extends Animal{
        constructor(name:string,species:string){
            super(name,species)
        }
        barks(){
            console.log("Dog barks");
        }
    }
    const cat = new Cat("Oggy","cat")
    const dog = new Dog("Bob","dog")
    const getAnimal =(animal:Animal)=>{
        if(animal instanceof Dog){
           console.log(animal.barks);
           
        }
        else if(animal instanceof Cat){
            console.log(animal.meow)
        }
    }
}