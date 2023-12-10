$(document).ready(function() {
    $('.navbar-nav a').on('click', function() {
        if ($('.navbar-toggler').is(':visible')) {
            $('.navbar-toggler').click();
        }
    });
});