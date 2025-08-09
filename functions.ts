
function addTwo(n){

    n.toUpperCase
    return n+2;
}

console.log(addTwo(23));

// ------------------------------------------------------------------


function calculateSum(n:number,m:number):number{


    return n+m;
}

console.log("Sum is : "+calculateSum(11,13));

// -----------------------------


function ageVerifier(age:number) :string{

if(age>18){
    
    return "Yes !! you are allowed ";

}

else{

    return "you cannot proceed"
}
}


console.log(ageVerifier(21))

// ------------------------------------

// never 

function errorHandeler(msg:string) :never{

throw(msg)
}


ageVerifier(21);