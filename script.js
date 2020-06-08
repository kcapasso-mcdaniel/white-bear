// Landing Page Validation
$("#sign-up-button").click(function () {
   $("#sign-up-form").toggleClass("d-none");
   $("#sign-up-button").remove();
});

// Create the date function
// This function generates the current date and time in two-digit formatting
var getToday = "";
var timeMilliseconds = "";

function createTheDate() {
   var getTodayDate = new Date();
   var dateYear = getTodayDate.getFullYear();
   console.log(dateYear);
   dateYear = dateYear.toString().substr(-2);
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
      dateYear +
      addTwoPadding(dateMonth) +
      addTwoPadding(dateDay) +
      addTwoPadding(timeHours) +
      addTwoPadding(timeMinutes) +
      addTwoPadding(timeSeconds);
   console.log(getToday);
}

// Padding functions for date and time to return proper number of digits

function addThreePadding(num) {
   // A1: number
   // R: string
   var numAsString = String(num);
   if (numAsString.length === 1) {
      return "00" + numAsString; // 4 returns "004"
   } else if (numAsString.length === 2) {
      return "0" + numAsString; // 44 returns "044"
   } else {
      return numAsString;
   }
}
function addTwoPadding(num) {
   // A1: number
   // R: string
   var numAsString = String(num);
   if (numAsString.length === 1) {
      return "0" + numAsString; // 4 returns "04"
   } else {
      return numAsString;
   }
}

// Variable for PassWord Validation
// Common password list for validation
var passwordList = [
   "x002tp00",
   "x4ww5qdr",
   "x72jhhu3z",
   "xaccess2",
   "xakep1234",
   "xboxlive",
   "xcalibur",
   "xcountry",
   "xenocide",
   "xenogear",
   "xenophobia",
   "xenophobic",
   "xenophon",
   "xexeylhf",
   "xianzong",
   "xiaoping",
   "xiaoyua123",
   "xinjiang",
   "xohzi3g4",
   "xpressmusic",
   "xsvnd4b2",
   "xsw21qaz",
   "xsw23edc",
   "xthtgfirf",
   "xtutdfhf",
   "xuanzang",
   "xuanzong",
   "xufrgemw",
   "xxx12345",
   "xxxp455w0rd5",
   "xxxxxxx1",
   "xyh28af4",
   "xylophone",
   "xzsawq21",
   "y'knowwhati'msayin",
   "y'understand",
   "yachting",
   "yaglasph",
   "yakovlev",
   "yakushova",
   "yamagata",
   "yamaha12",
   "yamahar1",
   "yamahar6",
   "yamakasi",
   "yamamoto",
   "yamanashi",
   "yamashita",
   "yammering",
   "yangzhou",
   "yankeemp",
   "yankees0",
   "yankees1",
   "yankees2",
   "yankees3",
   "yankees4",
   "yankees7",
   "yankees9",
   "yankovic",
   "yanochka",
   "yanshi1982",
   "yanukovych",
   "yarborough",
   "yarbrough",
   "yardbird",
   "yardbirds",
   "yardstick",
   "yarmouth",
   "yaroslav",
   "yaroslavl",
   "yasacrac",
   "yasuhiro",
   "ybrbnbyf",
   "ybrbnf_25",
   "ybrbnjcbr",
   "ybrjkftd",
   "ybrjkftdbx",
   "ybrjkftdyf",
   "ycwvrxxh",
   "yeahbaby",
   "yeahrigh",
   "yeahright",
   "year2000",
   "year2005",
   "yearbook",
   "yearbooks",
   "yearning",
   "yearnings",
   "yekaterinburg",
   "yelburton",
   "yelena03",
   "yellow12",
   "yellow22",
   "yellowhead",
   "yellowish",
   "yellowknife",
   "yellowstone",
   "yelverton",
   "yemenite",
   "yengeese",
   "yeomanry",
   "yes90125",
   "yeshivas",
   "yessenia",
   "yesterda",
   "yesterday",
   "yesterdays",
   "yfcnfcmz",
   "yfcntymrf",
   "yfcnz123",
   "yfcnzvjz",
   "yfcnzyfcnz",
   "yfdbufnjh",
   "yfeiybrb",
   "yfgjktjy",
   "yfhrjnbrb",
   "yfltymrf",
   "yfnfitymrf",
   "yfxfkmybr",
   "ygfxbkgt",
   "yggdrasi",
   "yielding",
   "yildirim",
   "yingling",
   "yingyang",
   "yitzchak",
   "yjdbrjdf",
   "yjdjcnbf",
   "yjdsqgfhjkm",
   "yjdsqujl",
   "yjdujhjl",
   "yjhbkmcr",
   "ym3cautj",
   "yogibear",
   "yogyakarta",
   "yohannan",
   "yokohama",
   "yokosuka",
   "yokozuna",
   "yorkshir",
   "yorkshire",
   "yorktown",
   "yorkville",
   "yosemite",
   "yoshihiro",
   "youandme",
   "youlanda",
   "youngblood",
   "youngest",
   "youngman",
   "youngone",
   "youngster",
   "youngsters",
   "youngstown",
   "yourmama",
   "yourmom1",
   "yourname",
   "yourself",
   "yourselves",
   "yousuck1",
   "youthful",
   "yoyodyne",
   "ypsilanti",
   "yqlgr667",
   "yqmbevgk",
   "yr8wdxcq",
   "ytdxz2ca",
   "ytngfhjkz",
   "ytnhjufnm",
   "ytrhjvfyn",
   "ytyfdbcnm",
   "yudhoyono",
   "yugoslav",
   "yugoslavia",
   "yugoslavian",
   "yuitre12",
   "yujyd360",
   "yuletide",
   "yushchenko",
   "yvelines",
   "yvtte545",
   "yxkck878",
   "yy5rbfsc",
   "yyyyyyy1",
   "yzerman1",
   "z1234567",
   "z123456789",
   "z123456z",
   "z1x2c3v4",
   "z1x2c3v4b5",
   "z1x2c3v4b5n6m7",
   "z1z2z3z4",
   "z3cn2erv",
   "zacatecas",
   "zacharia",
   "zachariah",
   "zacharias",
   "zachary1",
   "zaharova",
   "zakamatak",
   "zalewski",
   "zalgiris",
   "zamarripa",
   "zambales",
   "zamboanga",
   "zambrano",
   "zamindar",
   "zamoyski",
   "zanesville",
   "zantopia",
   "zanzibar",
   "zapatista",
   "zaphod42",
   "zaporizhia",
   "zapruder",
   "zaq!2wsx",
   "zaq11qaz",
   "zaq12345",
   "zaq123wsx",
   "zaq12qaz",
   "zaq12wsx",
   "zaq1xsw2",
   "zaq1xsw2cde3",
   "zaqwsx123",
   "zaqwsxcde",
   "zaqwsxcderfv",
   "zaqxsw123",
   "zaqxswcde",
   "zaragoza",
   "zaratustra",
   "zarzuela",
   "zasranec",
   "zatunica",
   "zawahiri",
   "zaxscdvf",
   "zbigniew",
   "zcfvfzkexifz",
   "zcxfcnkbdf",
   "zcxfcnkbdfz",
   "zealander",
   "zealanders",
   "zebra123",
   "zechariah",
   "zeebrugge",
   "zeitgeist",
   "zeitschrift",
   "zeljeznicar",
   "zemanova",
   "zendejas",
   "zenit2011",
   "zeppelin",
   "zeringue",
   "zerocool",
   "zesyrmvu",
   "zhaozong",
   "zhejiang",
   "zhengzhou",
   "zhjckfdf",
   "zhongguo",
   "zhongshan",
   "zhongshu",
   "zhongzong",
   "zhytomyr",
   "zidane10",
   "ziegfeld",
   "zielinski",
   "zigazaga",
   "ziggy123",
   "zildjian",
   "zillions",
   "zimbabwe",
   "zimbabwean",
   "zimmerma",
   "zimmerman",
   "zimmermann",
   "zinedine",
   "zinfandel",
   "zinoviev",
   "zionists",
   "zipdrive",
   "zippy123",
   "zirconia",
   "zirconium",
   "zjses9evpa",
   "zldej102",
   "zoidberg",
   "zolushka",
   "zombie13",
   "zookeeper",
   "zoological",
   "zoologist",
   "zooplankton",
   "zootsuit",
   "zoroaster",
   "zoroastrian",
   "zoroastrianism",
   "zoroastrians",
   "zorro123",
   "zpflhjn1",
   "zqjphsyf6ctifgu",
   "zrjdktdf",
   "zse45rdx",
   "zse4xdr5",
   "zsecyus56",
   "zucchero",
   "zucchini",
   "zuckerberg",
   "zuckerman",
   "zukowski",
   "zulfikar",
   "zulfiqar",
   "zvonareva",
   "zweibrucken",
   "zx123456",
   "zx123456789",
   "zxasqw12",
   "zxc12345",
   "zxc123456",
   "zxc123zxc",
   "zxcasd123",
   "zxcasdqw",
   "zxcasdqwe",
   "zxcasdqwe123",
   "zxcqweasd",
   "zxcv1234",
   "zxcv4321",
   "zxcvasdf",
   "zxcvb123",
   "zxcvb1234",
   "zxcvb12345",
   "zxcvbasdfg",
   "zxcvbn12",
   "zxcvbn123",
   "zxcvbn123456",
   "zxcvbnm.",
   "zxcvbnm1",
   "zxcvbnm12",
   "zxcvbnm123",
   "zxcvbnm123456789",
   "zxcvbnma",
   "zxcvbnmm",
   "zxcvbnmz",
   "zxcvfdsa",
   "zxcvvcxz",
   "zz123456",
   "zz8807zpl",
   "zzxxccvv",
   "zzzxxxccc",
   "zzzzxxxx",
   "zzzzzzz1",
];

// filter method to only give the words that are greater than 8 characters
var filteredPasswords = passwordList.filter((word) => word.length > 8 === true);
// console.log(filteredPasswords);

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

   // add notes
   var uniqueCharacters = [];
   for (let charIndex in beforeAtLocal) {
      // add notes
      var character = beforeAtLocal[charIndex];
      if (uniqueCharacters.includes(character) === false) {
         uniqueCharacters.push(character);
      }
   }
   console.log(uniqueCharacters);

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
      // if the number of unique characters is >= 3 valid email
   } else if (uniqueCharacters.length < 3) {
      console.log("showErrorMessage");
      $("#emailErrorMessage").text("Please use at least 3 unique characters.");
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
      // if the password input matches the common password list show error message
   } else if (filteredPasswords.includes(passwordInput)) {
      console.log("password-is-found-in-the-list");
      $("#passwordErrorMessage").text("Please do not use a common password");
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

   // encrypt the password
   // charCode is the numeric value of the character
   var passwordEncrypted = "";

   for (let index in passwordInput) {
      // change character to number and increment by 1
      var character = passwordInput.charCodeAt(index) + 1;
      // change number back to string
      var character = String.fromCharCode(character);
      // character has been incremented therefore { is used in place of "z"
      if (character == "{") {
         character = "a";
      }
      // character has already been incremented therefore [ is used in place of "Z"
      if (character == "[") {
         character = "A";
      }
      passwordEncrypted = passwordEncrypted + character;
   }

   // New User Submission Entry - created after email and password pass validation
   // calling my createTheDate function to generate the createdOn Date
   createTheDate();
   //  variable for random number for generate _id
   var randomNumberForId = Math.floor(Math.random() * 1000);
   // console.log(randomNumberForId);
   // concatenate timeMilliseconds & randomNumberForId to create new six-digit id
   // will generate a new id in the console and also noted the exact date and time of entry
   var getNewId =
      "" +
      addThreePadding(timeMilliseconds) +
      addThreePadding(randomNumberForId);

   if (userEmailValid && validPassword) {
      var newUserSubmission = {
         _id: getNewId,
         email: emailInput,
         password: passwordEncrypted,
         // Number changes the date from a string to a number
         createdOn: Number(getToday),
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

   // calling the date for createdOn and the timeMilliseconds for id
   createTheDate();

   //  variable for random number for Id
   var randomNumberForId = Math.floor(Math.random() * 1000);
   console.log(randomNumberForId);
   // concatenate timeMilliseconds & randomNumberForId to create new six-digit id
   var getNewId =
      "" +
      addThreePadding(timeMilliseconds) +
      addThreePadding(randomNumberForId);

   // userImageryInput tracks user input
   var userImageryInput = {
      _id: getNewId,
      // encode to prevent users from entering syntax that could jeaopardize the security of database and application
      imagery: encodeURIComponent(
         "A delicious shishkebab but the first bite of meat after the pointy end is spicy & makes an exclamation point appear over my head like in a JRPG."
      ),
      // encode to prevent users from entering syntax that could jeaopardize the security of database and application
      answer: encodeURIComponent(
         "The syntax for making a comment in HTML is <!-- Mike's comment here -->"
      ),
      levelNum: 1,
      successfulAttemptsNum: 0,
      // Number changes the date from a string to a Number
      createdOn: Number(getToday),
      lastAttemptedOn: Number(getToday),
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
