$(window).on("load", function () {
  /*Preloder*/
  $(".loader").fadeOut();
  $("#preloder").delay(400).fadeOut("slow");
});

window.addEventListener("DOMContentLoaded", (Event) => {
  getVisitCount();
});

const ProductionUrl = "https://resumechallenge1.azurewebsites.net/api/main";
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
