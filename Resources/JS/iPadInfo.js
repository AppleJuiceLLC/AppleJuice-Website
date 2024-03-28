function fetchAndUpdatePrices() {
    fetch("../data/modelPrices.json")
        .then(response => response.json())
        .then(data => {
            for (const iPad in data) {
                const iPadData = data[iPad];
                const iPadElement = document.getElementById(iPad);
                if (iPadElement) {
                    updateElementText(iPadElement, 'screen', iPadData.screen);
                    updateElementText(iPadElement, 'battery', iPadData.battery);
                    updateElementText(iPadElement, 'cPort', iPadData.cPort);
                }
            }
        })
        .catch(error => console.error('Error fetching prices', error));
}

function updateElementText(container, elementClass, data) {
    const element = container.querySelector(`.${elementClass}`);
    if (element) {
        element.textContent += data;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetchAndUpdatePrices();
});
