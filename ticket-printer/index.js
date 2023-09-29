const items = [
    {
        title: "Relaxing Massage (45min)",
        price: 300
    },
    {
        title: "Relaxing Massage (60min)",
        price: 400
    },
    {
        title: "Foot Massage  (20min)",
        price: 150
    },
    {
        title: "Foot soak",
        price: 100,
    }
];

const selectedItems = [];
var selectedIndex = 0;
var totalPrice = 0;

const selectElement = document.getElementById("items-menu");
const listElement = document.getElementById("items-list");
const totalElement = document.getElementById("total");
items.forEach((item, index) => {
    const optionElement = document.createElement("option");
    optionElement.innerHTML = item.title;
    optionElement.setAttribute("value", index);
    selectElement.appendChild(optionElement);
});

function handleSelectChange() {
    selectedIndex = selectElement.value;
}

function clearTable(parent) {
    while (parent.children[1]) {
        parent.removeChild(parent.children[1]);
    }
}

function removeItem(index) {
    selectedItems.splice(index, 1);

    refreshPage();
}

function refreshPage() {
    clearTable(listElement);
    selectedItems.forEach((item, index) => {
        const tableRow = document.createElement("tr");
        const tableRowItem = document.createElement("td");
        tableRowItem.innerHTML = item.title;
        const tableRowPrice = document.createElement("td");
        tableRowPrice.innerHTML = item.price;
        const tableRowButton = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "x";deleteButton.setAttribute("onclick", `removeItem(${index})`);
        tableRowButton.appendChild(deleteButton);
        tableRowButton.className = "no-print";
        tableRow.appendChild(tableRowItem);
        tableRow.appendChild(tableRowPrice);
        tableRow.appendChild(tableRowButton);
        listElement.appendChild(tableRow);
    });
    setTotal();
}

function setTotal() {
    totalPrice = selectedItems.reduce((accumulator, { price }) => accumulator + price, 0);
    totalElement.innerHTML = totalPrice;
}

function addElement() {
    const selectedItem = items[selectedIndex];
    selectedItems.push({ ...selectedItem });
    refreshPage();
}

function handlePrint() {
    if (selectedItems.length === 0)
        alert("The selected list is empty. Add elements to print receipt");
    else {
        const dateElement = document.getElementById("date");
        const now = new Date();
        dateElement.innerHTML = now.toLocaleString();
        window.print();
    }
}