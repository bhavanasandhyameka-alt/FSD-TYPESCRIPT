class Student1 {
    name: string;
    age: number;
    branch: string;
    cgpa: number;
    constructor(name: string, age: number);

    constructor(name: string, age: number, branch: string, cgpa: number);

    constructor(
        name: string,
        age: number,
        branch?: string,
        cgpa?: number
    ) {
        this.name = name;
        this.age = age;
        this.branch = branch ?? "AIML";
        this.cgpa = cgpa ?? 7.5;
    }

    display(): void {
        console.log(`Name   : ${this.name}`);
        console.log(`Age    : ${this.age}`);
        console.log(`Branch : ${this.branch}`);
        console.log(`CGPA   : ${this.cgpa}`);
        console.log("------------------------");
    }
}

const s1 = new Student1("bhavana sandhya", 20);

const s2 = new Student1("bindu", 20, "AI", 9.4);

s1.display();
s2.display();