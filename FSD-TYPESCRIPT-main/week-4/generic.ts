function display<T>(value: T): T {
    return value;
}

console.log(display<string>("manasa"));
console.log(display<number>(100));

class Data<T> {

    value: T;

    constructor(value: T) {
        this.value = value;
    }

    show(): void {
        console.log(this.value);
    }
}

let d1 = new Data<string>("Hello");
d1.show();