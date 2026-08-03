class Employee {

    public name: string;
    private salary: number;
    protected department: string;
    readonly id: number;

    static company: string = "BBJ Pvt Ltd";

    constructor(name: string, salary: number, department: string, id: number) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.id = id;
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
        console.log("ID:", this.id);
    }
}

let emp = new Employee("bhavana sandhya", 50000, "csm", 101);

emp.display();

console.log("Company:", Employee.company);