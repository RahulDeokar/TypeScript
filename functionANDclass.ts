class Calculator{

    name :string ;

    EmpData:any[]=[
{
   Name:"Rahul",
   EmpId:23
}
    ]

    constructor(name:string){
        this.name=name;
        console.log("Constructor is called "+this.EmpData.Name)
    }
    
    addition(a:number , b:number ){
        console.log("Addition is ", a+b)
        console.log("Employee name is ",this.name);
    }


}

function subtraction(a:number,b:number){
    console.log("Substraction is :",+b-a);
}


const cal=new Calculator("Rahul");

cal.addition(12,4);

subtraction(12,44);

   let EmpData2={
Name:"Rahul",
EmpId:23
    }

    let empDate=23;
    let empData2;
    console.log(empDate)