const chai = {
    name : "masala Chai",
    price : 20,
    isHot : true
}

//internally in ts it look like :-
{
    name : string;
    price : number;
    isHot : boolean
}

//===================================================================================================
//1️⃣ Inline Object Type

// The type is written directly with the variable.
// Useful for one-time / small usage.
// The variable must match the structure exactly.

let tea : {
    name : string;
    price : number;
    isHot : boolean
}

tea = {
    name : "ginger tea",
    price : 25,
    isHot : false
}

//===================================================================================================
//2️⃣ Type Alias

// Gives the object type a name (Tea).
// You can reuse it anywhere.
// Makes code cleaner & scalable.

type Tea = {
    name : string;
    price : number
    ingredients : string[]
}

const adrakWaliChai : Tea = {
    name : "ginger Tea",
    price : 25,
    ingredients : ["ginger", "tea leaves"]
}

//===================================================================================================

type Cup = {size : string};
let smallCup : Cup = {size :"200ml"}

let bigCup = {size : "500ml", material: "steel"}
smallCup = bigCup
console.log(smallCup); //{ size: '500ml', material: 'steel' }

//===================================================================================================

type User = {
    userName : string;
    password : string
}

let u1:User = {
    userName : "shawzter",
    password : "*123@dinesh"
}

const u2 = {
    userName : "r-star",
    password : "*852@r",
    key : 1
}

u1 = u2; 
// on assigning u2 to u1, TypeScript allows it because u2 has at least
// the required properties of User (extra properties like `key` are ignored)

console.log(u1);  //{ userName: 'r-star', password: '*852@r', key: 1 }

//===================================================================================================

type Item = {name : string; quantity : number}
type Address = {street : string, pin : number}

type Order = {
    id : number;
    items : Item[];
    address : Address
}

//===================================================================================================
type Chai = {
    name :string;
    price : number;
    isHot : boolean;
}

// Partial<Chai> makes all properties optional
// Partial<Chai>  ->  // { name?: string; price?: number; isHot?: boolean }

const updatedChai = (updates : Partial<Chai>) => {
    console.log(`updating chai with ${updates}`);
}

updatedChai({price : 6})
updatedChai({}) //this is the issue while using partial 

//===================================================================================================
type ChaiOrder = {
    name?:string;
    quantity?:number;
}

//Required<T> removes ? from every property → everything must be provided.

const placeOrder = (order : Required<ChaiOrder>) => {
    console.log(order);
    
}

placeOrder({name : "mukesh", quantity : 2})


//===================================================================================================
type Chai2 = {
    name : string;
    price : number;
    isHot : boolean;
    ingredients : string[];
}

type BasicChaiInfo = Pick<Chai2, "name" | "price"> //similar to partial but here you can pick the field as you want to be there. 

const chaiInfo : BasicChaiInfo = {
    name : "Leamon Tea",
    price : 30
}

//===================================================================================================
type Chai3 = {
    name : string;
    price : number;
    isHot : boolean;
    secretIngredients : string;
}

type PublicChai = Omit<Chai3, "secretIngredients">;  //here we want to omet secretIngredients

