function fetchAndUpdatePrices() {
    fetch("../data/modelPrices.json")
        .then(response => response.json())
        .then(data => {
            for (const watch in data) {
                const watchData = data[watch];
                const watchElement = document.getElementById(watch);
                if (watchElement) {
                    updateElementText(watchElement, 'screen', watchData.screen);
                    updateElementText(watchElement, 'battery', watchData.battery);
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
