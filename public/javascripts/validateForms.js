(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.getElementsByClassName('validated-form');
        // Loop over them and prevent submission
        Array.from(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// Validate star rating
const reviewForm = document.querySelector("#reviewForm");
const defaultStarInput = document.querySelector("input[name='review[rating]']");
const statusContainer = document.querySelector("#status");
if (reviewForm) {
    reviewForm.addEventListener("submit", function (e) {
        if (defaultStarInput.checked) {
            statusContainer.classList.remove("d-none");
            e.preventDefault();
        } else {
            statusContainer.classList.add("d-none");
        }
    })
}
