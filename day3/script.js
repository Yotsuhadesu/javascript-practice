let grade = Number(prompt("Grade:"));
let remark;
if (grade >= 90 && grade <= 100) {
    remark = "Excellent";
} else if (grade >= 75 && grade < 90) {
    remark = "Good";
} else if (grade >= 60 && grade < 75) {
    remark = "Passed";
} else if (grade < 60) {
    remark = "Failed";
} else {
    remark = "Invalid grade";
}
document.getElementById("result").textContent = remark;