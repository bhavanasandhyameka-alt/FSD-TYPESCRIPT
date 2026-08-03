let value: any = 100;
console.log("Any:", value);
let data: unknown = "TypeScript";
if (typeof data === "string") {
    console.log("Unknown:", data);
}
function displayMessage(): void {
    console.log("Welcome to TypeScript");
}
displayMessage();