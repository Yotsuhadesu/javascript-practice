function gradeChecker(grade) {
    if (grade >= 90 && grade <= 100) {
        return "Excellent";
    } else if (grade >= 75 && grade < 90) {
        return "Good";
    } else if (grade >= 60 && grade < 75) {
        return "Passed";
    } else if (grade >= 0 && grade < 60) {
        return "Failed";
    } else {
        return "Invalid grade";
    }
}
let input = prompt("Grade: ");
if (input !== null && input.trim() !== "") {
    document.getElementById("txt").textContent = gradeChecker(Number(input));
} else {
    document.getElementById("txt").textContent = "Please input a number.";
}