const menuPro = document.getElementById("laptopModelsPro");
const menuAir = document.getElementById("laptopModelsAir");
const menuMacBook = document.getElementById("laptopModelsMacBook");
const menuiMac = document.getElementById("iMacModels");
const infoDivPro = document.getElementById("infoPro");
const infoDivAir = document.getElementById("infoAir");
const infoDivMacBook = document.getElementById("infoMacBook");
const infoDiviMac = document.getElementById("infoiMac");

fetch("../data/modelPrices.json")
    .then((response) => response.json())
    .then((modelPrices) => {
        attachEventListeners(modelPrices);
    })
    .catch((error) => {
        console.error("Error fetching model prices", error);
    });

function attachEventListeners(modelPrices) {
    menuPro.addEventListener("change", function () {
        populatePrices(menuPro, infoDivPro, modelPrices);
    });

    menuAir.addEventListener("change", function () {
        populatePrices(menuAir, infoDivAir, modelPrices);
    });

    menuMacBook.addEventListener("change", function () {
        populatePrices(menuMacBook, infoDivMacBook, modelPrices);
    });

    menuiMac.addEventListener("change", function () {
        populatePrices(menuiMac, infoDiviMac, modelPrices);
    });
}

function populatePrices(menu, infoDiv, modelPrices) {
    const selectedItem = menu.value;

    const displayReplacementElement = infoDiv.querySelector('.display-replacement');
    const batteryReplacementElement = infoDiv.querySelector('.battery-replacement');
    const hardDriveReplacementElement = infoDiv.querySelector('.hard-drive-replacement');

    if (selectedItem && modelPrices[selectedItem]) {
        const selectedModel = modelPrices[selectedItem];

        displayReplacementElement.textContent = `${selectedModel.displayReplacement}`;
        batteryReplacementElement.textContent = `${selectedModel.batteryReplacement}`;
        hardDriveReplacementElement.textContent = `${selectedModel.hardDriveReplacement}`
    } else {
        displayReplacementElement.textContent = "";
        batteryReplacementElement.textContent = "";
        hardDriveReplacementElement.textContent = "";
    }
}
