// Example 1

const userInfo = {
  name: "Leyla",
  surname: "Hasanova",
  age: 15,
  profession: "teacher",
};

if (userInfo.name === "Leyla") {
  console.log("the name of this person is Leyla");
} else {
  console.log("the name is something else");
}

if (userInfo.age < 18) {
  if (userInfo.age < 12) {
    console.log("this person is a child");
  } else {
    console.log("this person is a teenager");
  }
} else {
  console.log("this person is an adult");
}

// Example 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

if (numbers.length < 10) {
  console.log("there are less than 10 numbers");
} else if (numbers.length == 10) {
  console.log("there are only 10 numbers");
} else {
  console.log("numbers are more than 10");
}

// Example 3

const passInfo = "";

if (passInfo.length > 0) {
  console.log("pass code has been enterd");
} else {
  console.log("pass code has not been entered");
}

// Example 4

const postApproval = true;

if (postApproval === true) {
  console.log("post has been approved");
} else {
  console.log("post has not been aprroved");
}

// Example 5

const studentName = "Jason";

if (!studentName.length > 4) {
  console.log("this name is short");
} else {
  console.log("this name is long");
}

// Ternary operator

const temperature = 15;

const result =
  temperature > 15
    ? "it is not, don`t wear a jacket"
    : "it is cold, wear a jecket";

console.log(result);

const year = 2024;

const century = year > 2000 ? "21st century" : "not 21st century";

console.log(`it is ${century}`);
