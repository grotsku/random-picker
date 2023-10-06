let para;

const inputBtn = document.querySelector("#inputBtn");
inputBtn.addEventListener("click", () => {
    if (para) {
        para.remove();
    }

    const container = document.querySelector(".chosenItem")
    para = document.createElement("p");
    para.textContent = pickRandomItem();

    container.appendChild(para);
});

function getItemsArray() {
    const itemsText = itemInput.value;
    const itemsArray = itemsText.split(",").map(item => item.trim());
    return itemsArray;
}

function pickRandomItem() {
    const itemsArray = getItemsArray();
    let randomNumber = Math.floor(Math.random() * itemsArray.length);
    let chosenItem = itemsArray[randomNumber];
    return chosenItem;
}