// Landing Page Validation
$("#sign-up-button").click(function () {
   $("#sign-up-form").toggleClass("d-none");
   $("#sign-up-button").remove();
});

//  Email and Password Validation
$("#lets-go-button").click(function () {
   // emailInput is the value of the user input for email address
   var emailInput = $("#new-userEmail").val();
   // atLocal checks the emailInput to ensure there is a local part
   var atLocal = emailInput.indexOf("@");
   // beforeAtLocal pulls the email address of the user but cuts it off at the @
   var beforeAtLocal = emailInput.slice(0, atLocal);
   // userEmail represents a valid user email address
   var userEmailValid = false;
   // if the email input is blank show the error message
   // else hide the error
   if (emailInput === "") {
      //   show the error message
      console.log("showErrorMessage");
      $("#emailErrorMessage").show();
      $("#new-userEmail").addClass("is-invalid");
   } else {
      console.log("textinhere");
      $("#emailErrorMessage").hide();
      $("#new-userEmail").addClass("is-valid");
      $("#new-userEmail").removeClass("is-invalid");
   }
   // if email does not contain local part show error message
   if (atLocal == -1) {
      console.log("showErrorMessage");
      $("#emailErrorMessage").show();
      $("#new-userEmail").addClass("is-invalid");
      $("#new-userEmail").removeClass("is-valid");
   } else {
      userEmailValid = true;
   }
   if (userEmailValid === true) {
      console.log("email is valid");
      $("#emailErrorMessage").hide();
      $("#new-userEmail").addClass("is-valid");
      $("#new-userEmail").removeClass("is-invalid");
   }
   // if any kind of error is present show invalid
   else {
      $("#emailErrorMessage").show();
      $("#new-userEmail").addClass("is-invalid");
      $("#new-userEmail").removeClass("is-valid");
   }
   // declare variable of valid //
   var validPassword = false;
   var passwordInput = $("#new-userPassword").val();
   console.log(passwordInput);
   // if the password input is blank show error message and invalid

   if (passwordInput === "") {
      console.log("passwordErrorMessage");
      $("#passwordErrorMessage").text("Please enter your password.");
      // if the password input is less than 9 characters show error message and invalid
   } else if (passwordInput.length < 9) {
      $("#passwordErrorMessage").text(
         "Your password must be at least 9 characters."
      );
      // if the password contains email address show error message
   } else if (passwordInput.indexOf(beforeAtLocal) > -1) {
      console.log(passwordInput);
      $("#passwordErrorMessage").text(
         "Your email address cannot be used in your password."
      );
   } else {
      validPassword = true;
   }
   // when no errors  present show is valid //
   if (validPassword === true) {
      console.log("password is valid");
      $("#passwordErrorMessage").hide();
      $("#new-userPassword").addClass("is-valid");
      $("#new-userPassword").removeClass("is-invalid");
   }
   // if any kind of error is present show invalid
   else {
      $("#passwordErrorMessage").show();
      $("#new-userPassword").addClass("is-invalid");
      $("#new-userPassword").removeClass("is-valid");
   }

   // Generate _id and created On Date

   // calling my createTheDate function to generate the createdOn Date
   // this function includes the timeMilliseconds variable for generate _id
   createTheDate();

   //  variable for random number for generate _id
   var randomNumberForId = Math.floor(Math.random() * 1000);
   console.log(randomNumberForId);

   // concatenate timeMilliseconds and randomNumberFor Id to create new id when email and password are valid
   var getNewId = "" + timeMilliseconds + randomNumberForId;

   if (userEmailValid && validPassword) {
      var newUserSubmission = {
         _id: getNewId,
         email: emailInput,
         password: passwordInput,
         createdOn: getToday,
      };
   }
   console.log(newUserSubmission);
});

// Create answer Character Counter

$("#answerArea").keyup(function () {
   // for each character entered in textarea display amount of characters preceding /240
   var answerInput = $("#answerArea").val().length;
   console.log(answerInput);
   var inputCounter = $("#characterCounter").text(answerInput + "/240");
   console.log(inputCounter);
   // disable "Next" button by default
   // when textarea has > 0 and <=240 characters enable
   if (answerInput === 0 || answerInput >= 240) {
      $("#next-button").attr("disabled", true);
      $("#characterCounter").addClass("text-danger");
      // when it has 0 or >240 disable it next button
      // change color of counter to "danger" when over 240 but contine to allow entry
   } else {
      $("#next-button").click(function () {
         window.location.href = "./create-imagery.html";
      });
      $("#next-button").attr("disabled", false);
      $("#characterCounter").removeClass("text-danger");
   }
});

//  Create imagery banners
$("#save-imageryButton").click(function () {
   $("#overlay-success").toggleClass("d-none d-flex");

   // // Date variables

   createTheDate();

   //  variable for random number for Id
   var randomNumberForId = Math.floor(Math.random() * 1000);
   console.log(randomNumberForId);

   // concatenate timeMilliseconds and randomNumberFor Id to create new id when email and password are valid
   var getNewId = "" + timeMilliseconds + randomNumberForId;

   var userImageryInput = {
      _id: getNewId,
      imagery:
         "A delicious shishkebab but the first bite of meat after the pointy end is spicy & makes an exclamation point appear over my head like in a JRPG.",
      answer:
         "The syntax for making a comment in HTML is <!-- Mike's comment here -->",
      levelNum: 1,
      successfulAttemptsNum: 0,
      createdOn: getToday,
      lastAttemptedOn: getToday,
   };
   console.log(userImageryInput);
});
$("#back-to-answer-imagery").click(function () {
   $("#overlay-danger").toggleClass("d-none d-flex");
});

// Edit Cards
$("#customCheck").click(function () {
   $("#delete-button").toggleClass("d-none");
});
$("#dropdown-toggle-all").click(function () {
   $("#dropdown-menu-list").toggleClass("show");
});

// Create the date function
var getToday = "";
var timeMilliseconds = "";

function createTheDate() {
   var getTodayDate = new Date();
   var dateYear = getTodayDate.getYear() - 100;
   console.log(dateYear);
   var dateMonth = getTodayDate.getMonth() + 1;
   console.log(dateMonth);
   var dateDay = getTodayDate.getDate();
   console.log(dateDay);
   var timeHours = getTodayDate.getHours();
   console.log(timeHours);
   var timeMinutes = getTodayDate.getMinutes();
   console.log(timeMinutes);
   var timeSeconds = getTodayDate.getSeconds();
   console.log(timeSeconds);
   timeMilliseconds = getTodayDate.getMilliseconds();
   console.log(timeMilliseconds);

   getToday =
      "" + //turns it into a readable string
      addPadding(dateYear) +
      addPadding(dateMonth) +
      addPadding(dateDay) +
      addPadding(timeHours) +
      addPadding(timeMinutes) +
      addPadding(timeSeconds);
   console.log(getToday);
}

function addPadding(num) {
   if (String(num).length < 2) {
      return "0" + num.toString();
   } else {
      return num;
   }
}
