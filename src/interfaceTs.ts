//for more info look file 54

type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

//===================================================================================================

// this will work both for type and interface
type TeaRecipe = {
  water: number;
  milk: number;
};

interface TeaRecipe2 {
  water: number;
  milk: number;
}

class MasalaChai implements TeaRecipe {  //works ok with type and interface 
  water = 100;
  milk = 50;
}

//===================================================================================================

type cupSize = "small" | "large";

class Chai implements cupSize { }  
//as you can see this will not work with hardcoded values 
// req object type as in the previous it works

// the type need to be changed with interface
interface cupSize2 {
  size : "small" | "large";
}

class Chai2 implements cupSize2 {
  size: "small" | "large" = "large";
}

//so it is prefer to have interface rather than type in class using implements

//===================================================================================================
type Response = {ok : true} | {ok : false}

class myRes implements Response {} 
//as you can see the same error as we discuss above we need interface declaration rather than type
//therefore

interface Response2 {
  toReturnVal : {ok : true} | {ok :false}
}

class myRes2 implements Response2 {
  toReturnVal: { ok: true; } | { ok: false; } = {ok : true};
} 


//===================================================================================================

type teaType = "ginger" | "leamon" | "masala" //these are called literal types

function orderChai(t : teaType) {
    console.log(t)
}

orderChai("elichi")  // look this is giving error as this is not in teaType

//===================================================================================================

type BaseChai = {teaLeaves : number}
type Extra = {Leamon : number}

type LeamonChai = BaseChai & Extra

const cup : LeamonChai = {
  teaLeaves : 10,
  Leamon : 2
}

//===================================================================================================

type User = {
  userName : string;
  bio?:string //it may or may not be in u1 (optional val)
}

const u1:User = {
  userName : "Dinesh",
}

const u2:User = {
  userName : "Dinesh",
  bio : "MERN dev"
}
//===================================================================================================

type Config = {
  readonly appName: string
  version:number
}

const cfg:Config = {
  appName : "Dinesh",
  version : 1.0
}

cfg.appName = "shawzter" // look it is giving me error as we can only define appName once
