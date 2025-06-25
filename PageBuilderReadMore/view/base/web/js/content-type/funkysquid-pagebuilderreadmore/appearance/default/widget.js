(function () {
    'use strict';

    // Add lazy loading to images
    document.querySelectorAll('.read-more-container img:not([loading])').forEach(function (img) {
        img.setAttribute('loading', 'lazy');
    });

    // Sets the read more button to open/close the content
    const buttons = document.querySelectorAll(".read-more-trigger");

    buttons.forEach(function(button) {
        button.addEventListener("click", function (e) {
            e.target.parentNode.parentNode.parentNode.classList.toggle("active");
        });
    });
})();
