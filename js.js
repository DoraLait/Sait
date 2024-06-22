// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function openModal(serviceNumber) {
    document.getElementById(`modal${serviceNumber}`).style.display = "block";
}

function closeModal(serviceNumber) {
    document.getElementById(`modal${serviceNumber}`).style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    for (let i = 1; i <= 7; i++) {
        let modal = document.getElementById(`modal${i}`);
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

