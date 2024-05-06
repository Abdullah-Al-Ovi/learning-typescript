{
    // constraint with keyOf:
    type Person = {
        name:string;
        age:number;
        husband?:boolean;
        wife?:boolean
    }
    type Male = keyof Person
    const male1:Male = "age"

    const getValuefromuser =<X,Y extends keyof X>(obj:X,key:Y)=>{
        return obj[key]
    }
    interface User{
        name:string;
        age:number;
        gender:string
    }
    const user1:User={
        name:"sha",
        age:3,
        gender:"male"
    }

    const res1 = getValuefromuser(user1,"age")

}