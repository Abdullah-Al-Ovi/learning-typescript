{
    const nothing =(msg:string):never=>{
        // console.log("Nothing....");
        throw new Error(msg)
        
    }
    nothing("dnas")
}