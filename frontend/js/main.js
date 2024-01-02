'use strict';


 $(window).on('load', function() { 
	 /*Preloder*/
	 $(".loader").fadeOut(); 
	 $("#preloder").delay(400).fadeOut("slow");
 
 });
 
window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const productionApiUrl = '';
const localApiUrl = '';

const getVisitCount = () => {
    let count = 30;
    fetch(productionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =  response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}
 