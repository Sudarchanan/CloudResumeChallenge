document.addEventListener("DOMContentLoaded", function(){
    try{
        let count = localStorage.getItem("VisitorCounter") || 0;
        count++;
        document.getElementById("counter").textContent = count;
        localStorage.setItem("visitorCount", count);
    }
    catch (error) {
        console.error("Error in visitor counter script:", error);
    }
    
})


 $(window).on('load', function() { 
	 /*Preloder*/
	 $(".loader").fadeOut(); 
	 $("#preloder").delay(400).fadeOut("slow");
 
 });
 
// window.addEventListener('DOMContentLoaded', (event) =>{
//     getVisitCount();
// })

// const productionApiUrl = '';
// const localApiUrl = '';

// const getVisitCount = () => {
//     let count = 30;
//     fetch(productionApiUrl).then(response => {
//         return response.json()
//     }).then(response =>{
//         console.log("Website called function API.");
//         count =  response.count;
//         document.getElementById("counter").innerText = count;
//     }).catch(function(error){
//         console.log(error);
//     });
//     return count;
// }
 