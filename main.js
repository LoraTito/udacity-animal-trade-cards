function animation() {
    $('#card').on('click', function () {
        $(this).addClass("animate-card");
    });

}

$("#card").on('click',function () {
    animation();
});
