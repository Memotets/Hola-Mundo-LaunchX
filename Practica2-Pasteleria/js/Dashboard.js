let mydata = JSON.parse(cakes);
//console.log(mydata["base"][0]); 
//console.log(mydata["added"][0]);

let cakesOnHTML = "";
let addedOnHTML = "";
for (let i = 0; i < 5; i++) {
    let templateString = 
    `
    <div class="card">
        <div class="card-image-div">
            <img class="card-image" src="../../img/pasteles/${mydata["base"][i]["sabor"]}.jpg" alt="chocolate">
        </div>
        <div class="card-body">
            <p>Sabor: ${mydata["base"][i]["sabor"]} </p>
            <p>Precio ${"$"+mydata["base"][i]["precio"]}</p>
        </div>
    </div>
    `;
     let templateTopping = 
     `
     <div class="card">
         <div class="card-image-div">
             <img class="card-image" src="../../img/pasteles/${mydata["added"][i]["adornos"]}.jpg" alt="chocolate">
         </div>
         <div class="card-body">
             <p>Sabor: ${mydata["added"][i]["adornos"]} </p>
             <p>Precio ${"$"+mydata["added"][i]["precio"]}</p>
         </div>
     </div>
     `;
    cakesOnHTML += templateString;
    addedOnHTML += templateTopping;
};

const cakeCards = document.querySelector(".all-cakes-cards");
const toppingsCards = document.querySelector(".all-toppings-cards");

cakeCards.innerHTML = cakesOnHTML;
toppingsCards.innerHTML = addedOnHTML;

