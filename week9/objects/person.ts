module objects {
	// PERSON CLASS ++++++++++++++++++++++++++++++++
export class Person {
	// PRIVATE INSTANCE VARIABLES
	private _name:string;
	private _age:number;
	private _weight:number;
	
	// CONSTRUCTOR ++++++++++++++++++++++++++++++
	constructor(name:string, age:number, weight:number) {
		this._name = name;
		this._age = age;
		this._weight = weight;
	}
	
	// PUBLIC METHODS +++++++++++++++++++++++++++
	public sayName():void {
		console.log("Your name is: " + this._name);
	}
}
}