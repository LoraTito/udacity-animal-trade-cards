// $(document).ready(function() {
//     $('#card').on('click', function () {
//         $(this).css("width", "800");
//     })
// });
//
// $('#card').on('click', function () {
//     $(this).css('background-color', 'blue');
// });

function animation() {

// Your code goes here!
    $('#card').on('click', 'td', function () {
        var color= "black";
        $(this).css('background-color', color);
    });

    // opacity.on('click', 'td', function(){
    //     var color= $('#colorPicker').val();
    //     var opacity = $('#opacity').val();
    //     $(this).css({ opacity: opacity })
    // });

}


$("#card").on('click',function (event) {
    animation();
});
