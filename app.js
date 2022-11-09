// Object
let userDetailsDatabase = {};


function getUserDetails() {

    // Username
  let userName = prompt("Enter your username");

  if (userName == null) {
    return
  }

  // Validate Username
  function validateUsername(userName) {
    if (userName.length < 10 && userName.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  while(validateUsername(userName) == false) {
    userName = prompt("Username must be less than 10 and greater than 0");
  }

  // Add userName to Object
  userDetailsDatabase["userName"] = userName;


  // Email Address
  let email = prompt("Enter your email address");

  if (email == null) {
    return
  }

  //validate email
  function validateEmail(email) {
    const emailCheck =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    emailCheckResult = emailCheck.test(email);

    if (emailCheckResult == true) {
      return true;
    } else {
      return false;
    }
  }

  while(validateEmail(email) == false) {
    email = prompt("Enter a valid email address")
  }

  // Add Email to Object
  userDetailsDatabase["Email"] = email;


  
  // Phone Number 
  let phoneNumber = prompt("Enter your phone number");

  if (phoneNumber == null) {
    return
  }

  // validate phoneNumber
  function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.length == 11) {
      return true;
    } else {
      return false;
    }
  }

  while (validatePhoneNumber(phoneNumber) == false) {
    phoneNumber = prompt("Phone number must be 11 digits!")
  }

  // Add Phone Number to Object
  userDetailsDatabase["phoneNumber"] = phoneNumber;

  

  // Password
  let password = prompt("Enter your password");

  if (password == null) {
    return
  }

  function validatePassword(password) {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  }

  while (validatePassword(password) == false) {
    password = prompt("Password must not be less than 6 digits")
  }

  // Add Password to Object
  userDetailsDatabase["password"] = password;
    
  
  
  // Confirm Password
  let confirmPassword = prompt("confirm your password");

  if (confirmPassword == null) {
    return
  }

  // validate confirm password
  function validateConfirmPassword(confirmPassword) {
    if (confirmPassword != password) {
      return false;
    } else {
      return true;
    }
  }

  while (validateConfirmPassword(confirmPassword) == false) {
    password = prompt("Confirm password does not match password, Try Again!")
  }

  console.log(userDetailsDatabase);

}


function displayUserDetails () {
    alert(`Your Details:\n Username: ${userDetailsDatabase.userName}\n Phone Number: ${userDetailsDatabase.phoneNumber}\n Email: ${userDetailsDatabase.Email}`)
}
