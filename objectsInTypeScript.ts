let Student={

    name:"Sanika",
    Email:"sanika@gmail.com",
    CGPA:9.2,
    isPlaced :true
}


// -----------------------------------------------------


type Subject={

    readonly _id:number,
    name:string,
    Weitage:number
    Marks?:number // optinal value
 
}

let subject1:Subject={

    _id:23,
    name:"Physics",
    Weitage :100
 

}

subject1.Weitage=50;

// subject1._id=25           // Not allowed


// -------------------------------------------------------

type Employee = {

  name: string;
  Email: string;
  Salary: number;
};

function createEmployee(name: string, Email: string, Salary: number): Employee {
  return {
    name: name,
    Email: Email,
    Salary: Salary
  };
}

const employee1 = createEmployee("Sachin", "sachin@gmail.com", 600000);
console.log(employee1);


// ---------------------------------------------------------

function userDetails(): { Name: string; Email: string; isActive: boolean } {
 
    return {
    Name: "Rahul",
    Email: "rahuldeokar@gmail.com",
    isActive: false
  };
}

const User = userDetails();
console.log(User);


// --------------------------------------------------------
