$(window).on("load", function () {
  /*Preloder*/
  // css
  $(".loader").fadeOut();
  $("#preloder").delay(400).fadeOut("slow");
});

window.addEventListener("DOMContentLoaded", (Event) => {
  getVisitCount();
});

// requesting az api function
const ProductionUrl = "FUNCTION URL";
const LocalApiUrl = "";
const ApiUrl = ProductionUrl;

const getVisitCount = () => {
  let count = "";
  fetch(ApiUrl)
    .then((response) => response.json())
    .then((msg) => {
      console.log("API  Called");
      count = msg[0].updated_count;
      document.getElementById("counter").innerText = count;
    })
    .catch(function (error) {
      console.log(error);
    });
};
