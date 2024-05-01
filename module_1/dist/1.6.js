"use strict";
{ // Function
    function add(num1 = 0, num2) {
        return num1 + num2;
    }
    const arrowFunc = (num1, num2) => {
        return num1 + num2;
    };
    const mySlef = {
        name: "Ovi",
        salary: 0,
        addSalary(salary) {
            return this.salary + salary;
        }
    };
    const arr2 = [1, 2, 3, 4];
    const squareArr3 = arr2.map((elm) => elm * elm);
}
