function studentDetails(
    name: string,
    age: number = 18,
    section?: string
): void {

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Section:", section);
}

function totalMarks(...marks: number[]): number {

    let sum: number = 0;

    for (let mark of marks) {
        sum += mark;
    }

    return sum;
}

studentDetails("bhavana");
studentDetails("jeevana", 20, "A");

let total: number = totalMarks(80, 90, 70);

console.log("Total Marks:", total);