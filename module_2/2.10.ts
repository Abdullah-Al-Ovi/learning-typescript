{
    type a1 = number | string 
    type b1= number & string 
    
    type IsString1 = a1 extends string | number ? true : false;
    type IsString2 = b1 extends string ? true : false;

    // const a1:a1= "wefdwe"
 
    // const b1:IsString2="ss"

    // type Result5 = IsString<string | number>; 

}

{
    type A ={
        name:string;
        age:number
    }
    type B ={
        name:string;
       gender:string
    }
    type C= A | B
    type D= A & B

    const person1:C={
        name:"sad",
        age:23,
        gender:"female"
    }

    const person2:D={
        name:"sad",
        age:23,
        gender:"male"
    }

    console.log(person1);
    console.log(person2);
    

}