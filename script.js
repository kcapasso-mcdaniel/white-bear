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
   // userEmail pulls the email address of the user but cuts it off at the @
   var beforeAtLocal = emailInput.slice(0, atLocal);
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
      console.log("#showErrorMessage");
      $("#emailErrorMessage").show();
      $("#new-userEmail").addClass("is-invalid");
      $("#new-userEmail").removeClass("is-valid");
   }
   // declare variable of valid //
   var valid = false;
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
   } else if (passwordInput.indexOf(atLocal)) {
      console.log(passwordInput);
      $("#passwordErrorMessage").text(
         "Your email address cannot be used in your password."
      );
   } else {
      valid = true;
   }
   // when no errors  present show is valid //
   if (valid === true) {
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
   // date and time fnction
   // console.log an OBJECT replacing numbers in createdOn with new number based on Javascript Date Object
   // need a variable for the OBJECT
   if ((emailInput, passwordInput)) {
      var newUserSubmission = {
         _id: "getId",
         email: emailInput,
         password: passwordInput,
         createdOn: "getDate",
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
$("#save-imagery").click(function () {
   $("#overlay-success").toggleClass("d-none d-flex");
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
