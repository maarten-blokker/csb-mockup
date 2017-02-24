$(document).ready(function () {
    var normalElements = $('#registerForm').find('[data-formPart="normal"]');
    var cardElements = $('#registerForm').find('[data-formPart="card"]');
    $('input[name=radioCreditcard]').on('change', function () {
        normalElements.toggle(250);
        cardElements.toggle(250);
    });

    cardElements.hide();
    enableValidation();
});

function enableValidation() {
    // validate signup form on keyup and submit
    $("#registerForm").validate({
        focusCleanup: true,
        rules: {
            title: "required",
            firstName: "required",
            lastName: "required",
            country: "required",
            houseNumber: "required",
            street: "required",
            city: "required",
            cardNumber: "required",
            cardHolderName: "required",
            expiryMonth: "required",
            expiryYear: "required",
            cvc: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            },
            password2: {
                required: true,
                minlength: 6,
                equalTo: "#password"
            },
            postalCode: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            title: "Voer een aanhef in.",
            firstName: "Voer een voornaam in.",
            lastName: "Voer een achternaam in.",
            country: "Voer een land in.",
            houseNumber: "Voer een huis nummer in.",
            street: "Voer een straat naam in.",
            city: "Voer een plaats in.",
            cardNumber: "Voer een kaart nummer in",
            cardHolderName: "Voer een kaarthouder naam in",
            expiryMonth: "Voer de maand van de vervaldatum van de kaart in.",
            expiryYear: "Voer het jaar van de vervaldatum van de kaart in.",
            cvc: "Voer de CVC code in.",
            email: "Voer een geldig e-mailadres in.",
            password: {
                required: "Voer een wachtwoord in.",
                minlength: "Je wachtwoord moet minimaal 6 karakters lang zijn."
            },
            password2: {
                required: "Voer een wachtwoord in.",
                minlength: "Je wachtwoord moet minimaal 6 karakters lang zijn.",
                equalTo: "Je wachtwoord moet hetzelfde zijn als hierboven."
            }
        }
    });
}
