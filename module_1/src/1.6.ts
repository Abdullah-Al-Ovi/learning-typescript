{// Function

function add(num1:number=0,num2:number) : number{
    return num1+num2
}

const arrowFunc  = (num1:number,num2:number):number =>{
    return num1+num2
}

const mySlef:{
    name:string;
    salary:number,
    addSalary:(salary:number)=>number
} ={
    name:"Ovi",
    salary:0,
    addSalary(salary:number){
        return this.salary + salary
    }
}

const arr2 :number[] = [1,2,3,4]
const squareArr3 :number[] = arr2.map((elm :number):number=>elm*elm)
}