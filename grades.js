
const scores = [82, 71, 62, 95, 55, 98, 72, 78, 84, 64, 58, 99, 99, 87, 60, 82, 82, 50];
//create an object to hold the grades
let grades = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    f: 0,
}
//for loop to iterate over each index in scores
for (let i = 0; i < scores.length; i++) {
    let test = scores[i];

    //check each grade, and if there is a match, increment by one
    switch (test) {
        case 91: case 92: case 93: case 94: case 95: case 96: case 97: case 98: case 99: case 100:
            grades.a++
            break;
        case 81: case 82: case 83: case 84: case 85: case 86: case 87: case 88: case 89: case 90:
            grades.b++
            break;
        case 71: case 72: case 73: case 74: case 75: case 76: case 77: case 78: case 79: case 80:
            grades.c++
            break;
        case 61: case 62: case 63: case 64: case 65: case 66: case 67: case 68: case 69: case 70:
            grades.d++
            break;
        default:
            grades.f++
    }
}

for (const prop in grades) {
    console.info(`${prop} = ${grades[prop]}`)
}

console.log(`Lowest score = ${scores.sort()[0]}`);
console.log(`Highest score = ${scores.sort().reverse()[0]}`);

let currentGradeCount = 0;
{
for (prop1 in grades) {
    if (currentGradeCount < `${grades[prop1]}`) {
        currentGradeCount = `${grades[prop1]}`;
        currentLetterCount = `${prop1}`;
    }  
} console.log(`Highest number of grades: ${currentLetterCount} with ${currentGradeCount}`)
}

for (prop1 in grades) {
    if (currentGradeCount > `${grades[prop1]}`) {
        currentGradeCount = `${grades[prop1]}`;
        currentLetterCount = `${prop1}`;
    }  
} console.log(`Lowest number of grades: ${currentLetterCount} with ${currentGradeCount}`)



