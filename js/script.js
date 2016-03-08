document.addEventListener("DOMContentLoaded", function () {

    var homeLink = document.getElementById("navHome");
    var castLink = document.getElementById("navCast");
    var reviewLink = document.getElementById("navReview");
    var castPage = document.getElementById("other");
    var homePage = document.getElementById("home");
    var reviewPage = document.getElementById("reviews");
  

    castLink.addEventListener("click", function () {

        homePage.className = "inactive-page";
        reviewPage.className = "inactive-page";
        castPage.className = "active-page";

        document.title = "Other";
    });
   
    homeLink.addEventListener("click", function () {

        castPage.className = "inactive-page";
        reviewPage.className = "inactive-page";
        homePage.className = "active-page";

        document.title = "Home";
    });

    reviewLink.addEventListener("click", function () {

        castPage.className = "inactive-page";
        homePage.className = "inactive-page";
        reviewPage.className = "active-page";

        document.title = "Reviews";
    });
});