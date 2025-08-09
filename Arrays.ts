

let EmployeeNames:string[]=["Rahul", "Purvil ","Shivansh","Sanika"]


EmployeeNames.push("Shubham")

EmployeeNames.pop()
EmployeeNames.splice(2, 1)

console.log(EmployeeNames)


console.log(EmployeeNames[2])



// -------------------------------------------------------------

type LaptopDetails={

    name:string,
    RAM:string
    Price:number
}


let LaptopDetailsArray: LaptopDetails[] = [];  


let laptop1:LaptopDetails={
    name:"Lenovo",
    RAM:"8GB",
    Price:56000.50
};

LaptopDetailsArray.push(laptop1);

let laptop2:LaptopDetails={
    name:"HP",
    RAM:"8GB",
    Price:65000
};

LaptopDetailsArray.push(laptop2);


console.log(LaptopDetailsArray)

console.log(LaptopDetailsArray[0].RAM)