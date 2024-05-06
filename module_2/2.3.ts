{
    // Generics
    type GenericsArray<T> = Array<T>
    type UserObj = { name: String; age: number }
    type GenericsTuple<X,Y> = [X,Y]

    const arr: GenericsArray<number> = [1, 2, 3]
    const str: GenericsArray<string> = ["1", "2", "3"]

    const users: GenericsArray<{ name: String; age: number }> = [
        {
            name: "A",
            age: 12
        },
        {
            name: "B",
            age: 13
        }
    ]
    const users1: GenericsArray<UserObj> = [
        {
            name: "A",
            age: 12
        },
        {
            name: "B",
            age: 13
        }
    ]
    
    const user1 : GenericsTuple<string,string>= ["A","B"]
    const userWithID :GenericsTuple<number,UserObj>=[1234,{
        name:"hbfhsb",
        age:14
    }]

}