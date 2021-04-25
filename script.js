class submissions {
    constructor (name, score, date) {
        this.name = name;
        this.score = score;
        this.date = date;
        this.passed = score>=60 ? true : false;
    }
}

function addSubmission(array, newName, newScore, newDate) {
    array.push(new submissions(newName,newScore, newDate));
}

const arraySubmissions = [];

arraySubmissions.push(new submissions('Jane', 95, '2020-01-24'));
arraySubmissions.push(new submissions('Joe', 77, '2018-05-14'));
arraySubmissions.push(new submissions('Jack', 59, '2019-07-05'));
arraySubmissions.push(new submissions('Jill', 88, '2020-04-22'));

addSubmission(arraySubmissions, 'Sally', 80, '2020-11-09');

function deleteSubmissionByIndex(array, index) {
    arraySubmissions.splice(index, 1);
}

function deleteSubmissionByName(array, name) {
    const indexOfSubmission = arraySubmissions.findIndex(s => s.name === name);
    arraySubmissions.splice(indexOfSubmission, 1);
}

function editSubmissions(array, index, score) {
    const passed = score >= 60;
    arraySubmissions[index].score = score;
    arraySubmissions[index].passed = passed;
}

function findSubmissionsByName(array, name) {
    return arraySubmissions.find(s => s.name === name);
}

function findLowestScore(array) {
    let lowestScore = 101;
    arraySubmissions.forEach(s => {
        if (s.score < lowestScore) {
            lowestScore = s.score;
        }
    })
    return arraySubmissions.find(s => s.score === lowestScore)
}

function findAverageScore(array) {
    const arrayLength = arraySubmissions.length;
    let total = 0;
    arraySubmissions.forEach(s => {
        total += s.score;
    })
    return total / arrayLength
}

function filterPassing(array) {
    return arraySubmissions.filter(s => s.passed)
}

function filter90AndAbove(array) {
    return arraySubmissions.filter(s => s.score >= 90);
}

deleteSubmissionByIndex(submissions, 1);
deleteSubmissionByName(submissions, 'Joe');
editSubmissions(submissions, 1, 55);
console.log(arraySubmissions);
const sub = findSubmissionsByName(submissions, 'Sally');
console.log(sub);
const lowestScoreSubmission = findLowestScore(submissions);
console.log(lowestScoreSubmission);
console.log(findAverageScore(submissions));
console.log(filterPassing(submissions))
console.log(filter90AndAbove(submissions));
