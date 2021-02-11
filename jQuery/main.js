// https://api.jquery.com/category/events/mouse-events/
// $('h1').click(function() {
//     $(this).text("I was Clicked")
// })

// https://api.jquery.com/category/events/keyboard-events/
$('input').eq(0).keypress(function (event) {
    // $('h3').toggleClass('turnBlue')
    // console.log(event)
    if (event.which === 13) {
        $('h3').toggleClass('turnBlue')
    }
})

// .on() event listner
$('h1').on('dblclick', function(){
    $(this).toggleClass('turnBlue')
})

// Animation & effects
// https://api.jquery.com/category/effects/

$('input').eq(1).on('click', function() {
    // $('.container').fadeOut(3000)
    $('.container').slideUp(1000)
})