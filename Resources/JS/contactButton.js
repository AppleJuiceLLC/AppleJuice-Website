document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.getElementById('Contact-Button');
    const popupButtons = document.getElementById('Popup-Buttons');
    const menuContent = document.querySelector('.buttonsContainer');
    const moreInfoLinks = document.querySelectorAll(".more-info, .contact");

    function togglePopupButtons() {
        if (popupButtons.style.display === 'flex') {
            closePopupButtons();
        } else {
            openPopupButtons();
        }
    }

    function openPopupButtons() {
        popupButtons.style.display = 'flex';
        setTimeout(() => {
            popupButtons.style.transform = 'translateY(0)';
        }, 10);
    }

    function closePopupButtons() {
        popupButtons.style.transform = 'translateY(150%)';
        setTimeout(() => {
            popupButtons.style.display = 'none';
        }, 300);
    }

    contactButton.addEventListener('click', (event) => {
        togglePopupButtons();
        event.stopPropagation();
    });

    document.addEventListener('click', (event) => {
        if (popupButtons.style.display === 'flex' && !menuContent.contains(event.target)) {
            closePopupButtons();
        }
    });

    menuContent.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    moreInfoLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            togglePopupButtons();
            event.stopPropagation();
        });
    });
});
