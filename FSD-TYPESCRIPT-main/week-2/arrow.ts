
function square(num: number): number {
    return num * num;
}
const cube = (num: number): number => {
    return num * num * num;
};
const operation=(Operation:string):string=>`We are performing ${Operation} operation`;
console.log(operation('Multiplication'));
console.log("Square:", square(5));
console.log("Cube:", cube(5));