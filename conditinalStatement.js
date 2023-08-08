// Loan eligibility

let age = 34;
let min_salary = 50000;
let is_working = true;
let loan_amount = 500000;

const elligible_amount = min_salary * 5;

if (age >= 20) {

    console.log("The person is elligible for loan");

    if (is_working) {

        if (loan_amount <= elligible_amount) {
                  console.log("Loan will be provided soon");
             } else {
                  console.log("Cannot provide the loan amount, We can provide the loan amout upto: " +loan_amount);
        }
    } else {
        console.log("Loan applicable only for working persons");
    }
} else {
    console.log("The person not elligible for loan");
}

// improvised using function:

if (age >= 20 && is_working) {
    if (loan_amount <= elligible_amount) {
    console.log("Loan will be provided soon");
    } else {
    console.log("Cannot provide the loan amount, We can provide the loan amout upto: " +loan_amount);
    }
    } else {
    console.log("The person not elligible for loan");
    }


 // using function with parameter
 
function isEligibleForLoan(age, minSalary, isWorking, loanAmount) {
    if (age >= 20 && isWorking) {
        if (loanAmount <= minSalary * 5) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

if (isEligibleForLoan(age, min_salary, is_working, loan_amount)) {
    console.log("Loan will be provided soon");
} else {
    console.log("The person not elligible for loan");
}

// using arrow functions: 

const isEligibleForLoan = (age, minSalary, isWorking, loanAmount) => {
    return (age >= 20 && isWorking) && (loanAmount <= minSalary * 5);
};

if (isEligibleForLoan(age, min_salary, is_working, loan_amount)) {
    console.log("Loan will be provided soon");
} else {
    console.log("The person not elligible for loan");
}



// Terinary operator:

let is_adult = (age>=18) ? "adult" : "teenage";
console.log(is_adult);

// Switch statement:

const browser = "chrome";

switch (browser) {
    case "chrome":
        console.log("Browser launched in chrome");
        break;
    case "edge": 
        console.log("Browser launched in edge");
        break;
    case "firefox": 
        console.log("Browser launched in firefox");
        break;
    default:
        console.log("The given browser not supported");
        break;
}
