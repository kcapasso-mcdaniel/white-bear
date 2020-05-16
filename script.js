$("#sign-up-button").click(function () {
   $("#sign-up-form").toggleClass("d-none");
   $("#sign-up-button").remove();
});
$("#save-imagery").click(function () {
   $("#overlay-success").toggleClass("d-none d-flex");
});
$("#back-to-answer-imagery").click(function () {
   $("#overlay-danger").toggleClass("d-none d-flex");
});
$("#customCheck").click(function () {
   $("#delete-button").toggleClass("d-none");
});
$("#dropdown-toggle-all").click(function () {
   $("#dropdown-menu-list").toggleClass("show");
});
