{
    // generics with function:
    // type fnGeneric<T>=(param:T)=>T[]
    const createArray=(param:string):string[]=>{
        return [param]
    }
    const createArrayWithGeneric=<T>(param:T):T[]=>{
        return [param]
    }
    const createTupleWithGen=<X,Y>(param1:X,param2:Y):[X,Y]=>{
        return [param1,param2]
    }

    // const addCourse=<T>(std:T):{
    //     course:string;
    //     std:T
    // }=>{
    //     const course="GHWdw"
    //     return {
    //         ...std,
    //         course
    //     }
    // }
    // const createArrayWithGeneric2 :fnGeneric<T>=(param)=>{
    //     return [param]
    // }

    const res = createArray("jfe")
    const resGeneric = createArrayWithGeneric<string>("hjdfr")
    // const resGeneric2 = createArrayWithGeneric2<string>("Bd")
    const resGenObj= createArrayWithGeneric<{name:string}>({name:"dhjdb"})
    const resTupgen = createTupleWithGen<string,number>("sdsa",34)

    // const addedCourse1 = addCourse<{name:string;school:string}>({name:"A",school:"Ahs"})
    // const addedCourse2 = addCourse<{name:string;college:string,roll:number}>({name:"A",college:"Ahsdfwe",roll:12})
    
    const addCourse = <T>(std: T): {
        course: string;
        std: T;
    } => {
        const course = "GHWdw";
        return {
            std,
            course
        };
    };
    type x= { name: string; school: string }
    const addedCourse1 = addCourse<x>({ name: "A", school: "Ahs" });
    const addedCourse2 = addCourse<{ name: string; college: string, roll: number }>({ name: "A", college: "Ahsdfwe", roll: 12 });
    



}