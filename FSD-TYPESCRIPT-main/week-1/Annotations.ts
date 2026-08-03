const marksList: number[] = [90, 85, 95];

function calculateAverage(scores: number[]): number {

    let sum: number = 0;

    for (let score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

let average: number = calculateAverage(marksList);

console.log("Marks:", marksList);
console.log("Average:", average);