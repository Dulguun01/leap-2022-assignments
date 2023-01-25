const emailTarget = document.querySelector("#email");
const passwordTarget = document.querySelector("#password");
const repasswordTarget = document.querySelector("#repassword");

const getFieldVaules = () => {
  return {
    email: emailTarget.value,
    password: passwordTarget.value,
    repassword: repasswordTarget.value,
  };
};

const signupSubmit = () => {
  const values = getFieldVaules();
  //   http://localhost:3333/api/signup
  fetch("http://localhost:3333/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((res) => {
      console.warn(res);
    });
};

const UPPER_LETTER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SPECIALS = "@$%!*#?&.";
const LOWER_LETTER = UPPER_LETTER.toLowerCase();
const NUMBERS = "0123456789";

const passwordCheck = (password, repassword) => {
  let match = password === repassword;
  let containsUpper = false;
  let containslower = false;
  let containsDigit = false;
  let containsChar = false;
  let containsLength = false;
  containsLength = password.length >= 8;

  for (const char of password.split("")) {
    if (!containsUpper) containsUpper = UPPER_LETTER.includes(char);
    if (!containslower) containslower = UPPER_LETTER.includes(char);
    if (!containsDigit) containsDigit = NUMBERS.includes(char);
    if (!containsDigit) containsDigit = NUMBERS.includes(char);
    if (!containsChar) containsChar = SPECIALS.includes(char);
  }

  return {
    match,
    containsChar,
    containsDigit,
    containsLength,
    containsUpper,
    containslower,
  };
};

const upperTarget = document.querySelector("#upper");
const lowerTarget = document.querySelector("#lower");
const numberTarget = document.querySelector("#number");
const lengthTarget = document.querySelector("#length");
const charTarget = document.querySelector("#char");
const matchTarget = document.querySelector("#match");

const passwordValidator = () => {
  const { password, repassword } = getFieldVaules();
  const passwordInfo = passwordCheck(password, repassword);
  if (passwordInfo.containsUpper) {
    upperTarget.checked = true;
  } else {
    upperTarget.checked = false;
  }
  if (passwordInfo.containsChar) {
    charTarget.checked = true;
  } else {
    charTarget.checked = false;
  }
  if (passwordInfo.containslower) {
    lowerTarget.checked = true;
  } else {
    lowerTarget.checked = false;
  }
  if (passwordInfo.containsDigit) {
    numberTarget.checked = true;
  } else {
    numberTarget.checked = false;
  }
  if (passwordInfo.containsLength) {
    lengthTarget.checked = true;
  } else {
    lengthTarget.checked = false;
  }
  console.log(passwordInfo.match);
  if (passwordInfo.match) {
    matchTarget.checked = true;
  } else {
    matchTarget.checked = false;
  }
  if (passwordInfo.match === true) {
    submitBtn.classList.remove("disabled");
    submitBtn.classList.add("btn-success");
  } else submitBtn.classList.remove("btn-danger");
  getFieldVaules();
};
passwordTarget.addEventListener("input", passwordValidator);
repasswordTarget.addEventListener("input", passwordValidator);

const submitBtn = document.querySelector("button");

// submitBtn.addEventListener("click", signupSubmit());

const getCar = () => {
  for (pass of passwordInfo) {
  }
};
