
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
    // let test = scores[i];

    //check each grade, and if there is a match, increment by one
    switch (true) {
        case (scores[i] >= 91 && scores[i] <= 100):
            grades.a++
            break;
        case (scores[i] >= 81 && scores[i] <= 90):
            grades.b++
            break;
        case (scores[i] >= 71 && scores[i] <= 80):
            grades.c++
            break;
        case (scores[i] >= 61 && scores[i] <= 70):
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



