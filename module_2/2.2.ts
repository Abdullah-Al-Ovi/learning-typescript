{
    // interface
    // Object:
    type User1 = {
        name: string;
        age: number
    }
    type User2 = {
        role: string
    }
    type UserWithRole1 = User1 & User2
    const userWIthRole1: UserWithRole1 = {
        name: "he",
        age: 3,
        role: "hed"
    }

    interface User3 {
        name: string;
        age: number
    }
    interface User4 {
        role: string
    }
    interface UserWithRole2 extends User3, User4 {

    }
    const userWIthRole2: UserWithRole2 = {
        name: "he",
        age: 3,
        role: "hed"
    }

    type UserWIthRole3 = User3 & User4
    const userWIthRole3: UserWIthRole3 = {
        name: "he",
        age: 3,
        role: "hed"
    }
    interface UserWIthRole4 extends User1, User2 {

    }
    const userWIthRole4: UserWIthRole4 = {
        name: "he",
        age: 3,
        role: "hed"
    }
    // Array:
     interface Arr{
        [index:number] : number
     }

     interface Add{
        (num1:number,num2:number) : number
     }
     const add :Add =function (num1,num2){
        return num1+num2
     }
    const add2:Add=(num1,num2)=>{
        return num1+num2
    }
}