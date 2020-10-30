const calculate = () => {
    const age = document.forms["myForm"]["age"].value;
    const gender = document.forms["myForm"]["gender"].value;
    const height = document.forms["myForm"]["height"].value;
    const weight = document.forms["myForm"]["weight"].value;
    let bmr = 0;
    if (age == '' || gender == '' || height == '' || weight == '') {
        alert("All fields are required");
        return false;
    } else if (gender == 1) {
        bmr = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    } else {
        bmr = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
    }
    if (bmr <= 1926) {
        suggestion = "Suggestion: little or no exercise.";
    } else if (bmr > 1926 && bmr <= 2207) {
        suggestion = "Suggestion: Exercise 1-3 times/week.";
    } else if (bmr > 2207 && bmr <= 2351) {
        suggestion = "Suggestion: Exercise 4-5 times/week.";
    } else if (bmr > 2351 && bmr <= 2488) {
        suggestion = "Suggestion: Daily exercise or intense exercise 3-4 times/week.";
    } else if (bmr > 2488 && bmr <= 2796) {
        suggestion = "Suggestion: Intense exercise 6-7 times/week.";
    } else if (bmr > 2796) {
        suggestion = "Very intense exercise daily, or physical job.";
    }

    document.getElementById("result").innerHTML = 'Your BMR: ' + bmr.toFixed(2) + 'kCal/Day' + '</br>' + suggestion;
    document.getElementById("result").style.display = "block";

    return false;

}