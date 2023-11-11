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
var currentItem = null;
var totalPrice = 0;

const selectElement = document.getElementById("items-menu");
const quantityInput = document.getElementById("quantity-input");
const priceInput = document.getElementById("price-input");
const listElement = document.getElementById("items-list");
const totalElement = document.getElementById("total");
items.forEach((item, index) => {
    const optionElement = document.createElement("option");
    optionElement.innerHTML = item.title;
    optionElement.setAttribute("value", index);
    selectElement.appendChild(optionElement);
});

function handleSelectChange() {
    if (selectElement.value === "") {
        setCurrentItem(null);
        return;
    }
    var selectedIndex = selectElement.value;
    setCurrentItem({
        name: items[selectedIndex].title,
        quantity: 1,
        price: items[selectedIndex].price
    });
}

function handleQuantityChange() {
    setCurrentItem({
        ...currentItem,
        quantity: parseInt(quantityInput.value)
    })
}

function handlePriceChange() {
    setCurrentItem({
        ...currentItem,
        price: parseInt(priceInput.value)
    })
}

function setCurrentItem(obj) {
    currentItem = obj;
    if (currentItem) {
        Object.freeze(currentItem);

        quantityInput.value = currentItem.quantity;
        quantityInput.disabled = false;
        priceInput.value = currentItem.price;
        priceInput.disabled = false;
    } else {
        quantityInput.value = 1;
        quantityInput.disabled = true;
        priceInput.value = 0;
        priceInput.disabled = true;
    }
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
        tableRowItem.innerHTML = item.name;
        const tableRowQuantity = document.createElement("td");
        tableRowQuantity.innerHTML = item.quantity;
        const tableRowPrice = document.createElement("td");
        tableRowPrice.innerHTML = item.price;
        const tableRowButton = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "x";deleteButton.setAttribute("onclick", `removeItem(${index})`);
        tableRowButton.appendChild(deleteButton);
        tableRowButton.className = "no-print";
        tableRow.appendChild(tableRowItem);
        tableRow.appendChild(tableRowQuantity)
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
    if (currentItem) {
        selectedItems.push(currentItem);
        setCurrentItem(null);
        refreshPage();
    }
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