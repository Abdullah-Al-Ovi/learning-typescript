{

    type User = {
        name:string;
        age:number
    }

    const user1 : User={
        name:"A",
        age:12
    }
    const user2 : User={
        name:"C",
        age:12
    }

    type Add = (num1:number,num2:number)=>number

    // TypeScript is unable to infer the types of num1 and num2 because you haven't explicitly declared them. Therefore, it defaults to the any type for these parameters. Since TypeScript cannot determine the parameter types, it cannot verify that the return type matches the Add type alias. Hence, it raises an error.
    // function add(num1,num2):Add{
    //     return num1+num2
    // }
    const add:Add=function(num1,num2){
        return num1+num2
    }

    const add2 : Add = (num1,num2)=>num1+num2
    // Here, you're using an arrow function, and you've explicitly annotated the variable add2 with the type Add. In this case, TypeScript can infer the types of num1 and num2 based on the type annotation of Add. Therefore, it does not raise an error because it can verify that the arrow function matches the specified type.


}