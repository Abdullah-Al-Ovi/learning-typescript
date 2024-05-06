{
    // constraint:
    const addCourse = <T extends {name:string}>(std: T): {
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
    const addedCourse3 = addCourse<{name:string }>({ name: "A"});
}