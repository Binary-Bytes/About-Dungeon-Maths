// Enable maximizing images and set copyright year in footer
$(document).ready(function() {
    // Handle media lightbox
    $('.expandable').on('click', lightbox);
    // Add year to copyright in footer
    var year = new Date().getFullYear();
    $('#copy').text('&copy; Binary Bytes, ' + year);
});


// Open images fullscreen
function lightbox() {
    // Append selected image to lightbox
    $image = $('<img>', { src: this.src })
        .wrap('<div id="lightbox">').parent().appendTo('body');
    // Show lightbox
    $('#lightbox').show();
    // Remove on click
    $('#lightbox')
        .on('click', function() {
            $(this).remove();
        });
}


// Cycle through quotes
(function displayQuotes() {
    $box = $('#quotes');
    $list = $('#quotes p');

    var interval = setInterval(function() {
        cycleQuotes();
    }, 4000);

    var i = 0;
    // Cycle through the quotes on an interval
    function cycleQuotes() {
        $box.html('<p><em>&quot;' + $list[i].innerHTML + '&quot;</em></p>');
        i++;
        if (i >= $list.length) {
            i = 0;
        }
        $box.css('opacity', '1');
        setTimeout(function() {
            $box.css('opacity', '0');
        }, 3000);
    }
    cycleQuotes();
}());