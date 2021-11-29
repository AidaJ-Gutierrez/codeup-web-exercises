"use strict";


$(document).ready(function() {
    $('dt').click(function() {
        $(this).addClass('highlighted');
    });
});

$(document).ready(function() {
    $('dt').click(function() {
        $('dd').toggleClass('invisible');
    });
});


