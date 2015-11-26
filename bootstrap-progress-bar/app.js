$(document).ready(function() {


    var updateProgressbar = function() {
        var progress = 0;
        var id = setInterval(function() {

            $(".progress-bar").css('width', progress + '%').attr('aria-valuenow', progress);
            progress++;
            if (progress === 101) {
                clearInterval(id);
            }
        }, 100);
    }();


});
