{
   const add=(param1:string | number,param2:string | number) : number | string=>{
    if(typeof param1==="number" && typeof param2==="number"){
        return param1+param2
    }
    else{
        return param1.toString() + param2.toString()
    }
   }
   
   const res1  = add(2,2)
   const res2 = add(2,"3")
   //    ............

   type NormalUser={
    name:string;
    age:number;
   }
   type AdminUser={
    name:string;
    age:number;
    role:string
   }
const getUser =(user:NormalUser|AdminUser):NormalUser|AdminUser=>{
    if("role" in user){
        return user
    }
    else{
         return user
    }
}
   

}