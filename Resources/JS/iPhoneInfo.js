function fetchAndUpdatePrices() {
    fetch("../data/modelPrices.json")
        .then(response => response.json())
        .then(data => {
            for (const iPhone in data) {
                const iPhoneData = data[iPhone];
                const iPhoneElement = document.getElementById(iPhone);
                if (iPhoneElement) {
                    updateElementText(iPhoneElement, 'screen', iPhoneData.screen);
                    updateElementText(iPhoneElement, 'battery', iPhoneData.battery);
                    updateElementText(iPhoneElement, 'cPort', iPhoneData.cPort);
                    updateElementText(iPhoneElement, 'back', iPhoneData.back);
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
