// Question 3

// Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, she needs to know the subjects she will be taking as an Arts student. All students have to take the General subjects.
// 	The subjects for each class group are as follows:
// 	Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
// Social Science Subjects - Accounting, Commerce, Marketing, Geography
// Arts Subjects - Government, Economics, Literature, History
// General Subjects - English, Mathematics

let department = "Commerce";
let subject = {
    "science" : "Physics, Chemistry, Biology, Technical Drawing",
    "socialScience" : "Accounting, Commerce, Marketing, Geography",
    "arts" : "Government, Economics, Literature, History",
    "general" : "English, Mathematics"
};

if (department === "Science"){
    console.log("You will be taking " + subject["science"]);
} else if (department === "Social Science"){
    console.log("You will be taking " + subject["socialScience"]);
} else if (department === "Arts"){
    console.log("You will be taking " + subject["arts"]);
} else {
    console.log("You will be taking " + subject["general"]);
}


// Question 5

// Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr. Then you log the answer in this format: 
// “The number (pwr) is the power of 2 nearest to (num).”
// If there are two candidate values, display the smaller one. For example, 2 and 4 4 are both the powers of 2 nearest to 3. The function should display 2 because it’s smaller than 4.


let num = 140;
let num1 = 140;
let count = 0;
while (num > 2){
    num /= 2;
    count += 1;
}
let smaller = 2**count;
let bigger = 2**(count+1);
if ((num1 - smaller) < (bigger - num1)){
    console.log ("The number " + smaller + " is the power of 2 nearest to " + num1);
} else {
    console.log ("The number " + bigger + " is the power of 2 nearest to " + num1);
}