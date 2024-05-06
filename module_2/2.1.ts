{
    // type assertion:
    let anything: any = "dhfbs";
    (anything as string)

    const fn = (val: number | string) :number|string|undefined => {
        if(typeof val ==="string"){
            return "jhdjsa"
        }
        else if(typeof val ==="number"){
            return val
        }
    }
    const res = fn(1000) as number
    type dwj={
        message:string
    }
   try {
    
   } catch (error) {
   console.log((error as dwj).message);
   }

}