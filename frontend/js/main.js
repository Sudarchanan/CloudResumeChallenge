$(window).on("load", function () {
  /*Preloder*/
  // css
  $(".loader").fadeOut();
  $("#preloder").delay(400).fadeOut("slow");
});

window.addEventListener("DOMContentLoaded", (Event) => {
  getVisitCount();
});

<<<<<<< HEAD
const ProductionUrl = "https://resumechallenge1.azurewebsites.net/api/main";
=======
// requesting az api function
const ProductionUrl = "FUNCTION URL";
>>>>>>> 2d9eee10808168a2d4df99106ac6ccb8b52f5ad7
const LocalApiUrl = "";
const ApiUrl = ProductionUrl;

const getVisitCount = () => {
  let count = "";
  fetch(ApiUrl)
    .then((response) => response.json())
    .then((msg) => {
      console.log("API  Called", msg);
      count = msg.updated_count;
      document.getElementById("counter").innerText = count;
    })
    .catch(function (error) {
      console.log(error);
    });
};
