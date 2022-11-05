const mydata = JSON.parse(cakes);
let cakeFetch = mydata["base"];
let toppings = mydata["added"];

let cakesOnHTML = cakeFetch.filter((cake) => (cake.cantidad > 0));
let addedOnHTML = toppings.filter((topping) => (topping.cantidad > 0));

let cakeOptions = "";
let toppingOptions = "";

cakeOptions = listToHTML(cakesOnHTML, "sabor" ,cakeOptions);
toppingOptions = listToHTML(addedOnHTML, "adornos" ,toppingOptions);

const cakeSelect = document.querySelector("#cake-select");
const toppingSelect = document.querySelector("#topping-select");

cakeSelect.innerHTML = cakeOptions;
toppingSelect.innerHTML = toppingOptions;
updatePrice();

function listToHTML(list,type, result) {
    for (let i = 0; i < list.length; i++) {
        let templateString = 
        `
        <option value="${list[i][type]}">${list[i][type]}</option>
        `;
        result += templateString;
    }
    return result;
}


function getSelectedCake() {
    let selectedCake = cakeSelect.options[cakeSelect.selectedIndex].value;
    return selectedCake;
}
function getSelectedTopping() {
    let selectedTopping = toppingSelect.options[toppingSelect.selectedIndex].value;
    return selectedTopping;
}


function extraBase() {
    const cake2Select = document.querySelector("#cake2-select");
    if (document.getElementById("cbox1").checked) {
        
        let cakeOnBass = getSelectedCake();
        let listcake = cakesOnHTML.filter((cake) => (cake.sabor != cakeOnBass));
        let cake2Options = "";
        cake2Options = listToHTML(listcake, "sabor" ,cake2Options);
        console.log(cake2Options);
        cake2Select.innerHTML = cake2Options;
        document.getElementById("cake2-select").style.display = "block";
    }else{
        document.getElementById("cake2-select").style.display = "none";
        let cake2Options = "";
        cake2Select.innerHTML = cake2Options;
    }
    updatePrice();
}

function extraTopping() {
    const cake2Select = document.querySelector("#topping2-select");
    if (document.getElementById("cbox2").checked) {
        
        let cakeOnBass = getSelectedTopping();
        let listcake = addedOnHTML.filter((cake) => (cake.adornos!= cakeOnBass));
        let cake2Options = "";
        cake2Options = listToHTML(listcake, "adornos" ,cake2Options);
        console.log(cake2Options);
        cake2Select.innerHTML = cake2Options;
        document.getElementById("topping2-select").style.display = "block";
    }else{
        document.getElementById("topping2-select").style.display = "none";
        let cake2Options = "";
        cake2Select.innerHTML = cake2Options;
    }
    updatePrice();
}

function updatePrice() {
    const cakeSelect = document.querySelector("#cake2-select");
    const toppingSelect = document.querySelector("#topping2-select");

    let cakeOnBass = getSelectedCake();
    let cakeOnTopping = getSelectedTopping();

    let extraCake = 0;
    let extraTopping = 0;
    
    if (document.getElementById("cbox1").checked) {
        let cake2OnBass = cakeSelect.options[cakeSelect.selectedIndex].value; //"sabor"
        let cake2Price = cakesOnHTML.filter((cake) => (cake.sabor == cake2OnBass)); // [{sabor: "chocolate", precio: 100, cantidad: 10}]
        extraCake = cake2Price[0].precio; // 100 
    }
    if (document.getElementById("cbox2").checked) {
        let topping2OnBass = toppingSelect.options[toppingSelect.selectedIndex].value; //"sabor"
        let topping2Price = addedOnHTML.filter((topping) => (topping.adornos == topping2OnBass)); // [{sabor: "chocolate", precio: 100, cantidad: 10}]
        extraTopping = topping2Price[0].precio; // 100
    }

    let cakePrice = cakesOnHTML.filter((cake) => (cake.sabor == cakeOnBass));
    let toppingPrice = addedOnHTML.filter((topping) => (topping.adornos == cakeOnTopping));

    let price = cakePrice[0].precio + toppingPrice[0].precio + extraCake + extraTopping;
    
    document.getElementById("price").innerHTML = "Precio estimado: " +price;
}