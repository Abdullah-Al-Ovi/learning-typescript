{
    // GEneric interface
    interface Developer<T,X=null>{
        name:string;
        pc:{
            brand:string;
            model:string
        };
        watch:T;
        car?: X
    }

    interface PoorWatch{
        name:string;
        model:string
    }
    interface RichWatch{
        name:string;
        model:string;
        heartRate:boolean
    }

    const poorDev :Developer<PoorWatch> ={
        name:"A",
        pc:{
            brand:"Hp",
            model:"Elitebook"
        },
        watch:{
            name:"xiaomi",
            model:"kolmi"
        }
    }
    const richDev :Developer<RichWatch,boolean> ={
        name:"A",
        pc:{
            brand:"Apple",
            model:"macbook"
        },
        watch:{
            name:"Apple",
            model:"watch series 7",
            heartRate:true
        },
        car: true
    }



}