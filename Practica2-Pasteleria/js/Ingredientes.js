let mydata = JSON.parse(cakes);
let cakeFetch = mydata["base"];
let toppings = mydata["added"];

let tableHeadFooter = `
<tr>
    <th></th>
    <th>Cantidad</th>
    <th>Precio</th>
</tr>
`;

let tableBody = `
<tr>
    <th>Sabor</th>
    <th></th>
    <th></th>
</tr>
`;
cakeFetch.forEach((cake) => {
    if (cake.cantidad == 0) {
        tableBody += `
        <tr class ="redmark">
            <td>${cake.sabor}</td>
            <td>${cake.cantidad}</td>
            <td>${"$"+cake.precio}</td>
        </tr>
        `;
    }else{
        tableBody += `
        <tr>
            <td>${cake.sabor}</td>
            <td>${cake.cantidad}</td>
            <td>${"$"+cake.precio}</td>
        </tr>
        `;
    }
});

tableBody += `
<tr>
    <th>Adornos</th>
    <th></th>
    <th></th>
</tr>
`;

toppings.forEach((topping) => {
    if (topping.cantidad == 0) {
        tableBody += `
        <tr class ="redmark">
            <td>${topping.adornos}</td>
            <td>${topping.cantidad}</td>
            <td>${"$"+topping.precio}</td>
        </tr>
        `;
    }
    tableBody += `
    <tr>
        <td>${topping.adornos}</td>
        <td>${topping.cantidad}</td>
        <td>${"$"+topping.precio}</td>
    </tr>
    `;
});

let table = tableHeadFooter + tableBody + tableHeadFooter;

const tableContainer = document.querySelector(".table-container");
tableContainer.innerHTML = table;