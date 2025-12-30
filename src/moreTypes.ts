let response:any = "42";
//force full type assertion
let numericLength:number = (response as string).length; //this will treat response as stirng

//=============================================================================================
type book = {
    name : string;
}

let bookString = '{"name" : "atomic habbit"}'
let bookObject = JSON.parse(bookString) as book
console.log(bookObject);


//=============================================================================================

const inputEle = document.getElementById("q") as HTMLInputElement


//=============================================================================================

//diffrence between any and unknown

let value : any
value = "hello"
value = [1,2,3]
value = 2.5
value.toUpperCase() //look here it is not giving error
// the final val of value is float and then we are using operator of stirng 

let newValue : unknown
newValue = "hello"
newValue = [1,2,3]
newValue = 2.5
newValue.toUpperCase() //look here it is giving error
// the final val of value is float and then we are using operator of stirng 

//to get rid from error we may look the below case!
if(typeof newValue === "string") {
    newValue.toUpperCase()
}


//=============================================================================================

try {
    
} catch (error) {
    if(error instanceof Error) {
        console.log(error);
    }
}


//=============================================================================================

const data:unknown = "hello"
const strData:string = data as string  //if we dont put as string it will though an error

//=============================================================================================

type Role = "admin" | "user";

function redirectBasedOnRole(role : Role):void {
    if(role === "admin") {
        console.log("Redirecting to admin dashboard");
        return;
    }
    if(role === "user") {
        console.log("Redirecting to user dashboard");
        return;
    }

    role;  //this is of Role never 

}

//=============================================================================================

function neverReturn():never {
    while(true) {}
}
