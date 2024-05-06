{
    // mapped type
     type Area={
        height:number,
        width: number
     } 
    //  type AreaString={
    //     [key in keyof Area] : string
    //  }
    // type height = Area["height"]

    type GenericAreaString<T>={
        [key in keyof Area]:T
    }
    type GenericAreaString1<T>={
        [key in keyof T]:T[key]
    }
    type AreaString = GenericAreaString<string>
    type AreaString1 = GenericAreaString1<{heigh:string,width:number}>


}