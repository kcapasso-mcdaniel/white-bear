// Landing Page Validation
$("#sign-up-button").click(function () {
   $("#sign-up-form").toggleClass("d-none");
   $("#sign-up-button").remove();
});
$("#lets-go-button").click(function () {
   var emailInput = $("#new-userEmail").val();
   console.log(emailInput);
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
      // if the password input is greater than 9 characters show valid
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
   if (answerInput < 0 || answerInput <= 240) {
      $("#next-button").removeClass("disabled");
      // when it has 0 or >240 disable it
   } else if (answerInput === 0 || answerInput > 240) {
      $("#next-button").addClass("disabled");
      $("#characterCounter").css("background-color", "red");
   } else {
      $("next-button").attr("disabled");
   }
   // Change the color of the entire character counter (241/240) to $danger if the characters in the textarea > 240 characters. The user may type as much as they want and the character counter will keep increasing //
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
