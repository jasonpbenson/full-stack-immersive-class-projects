// jQuery is a JavaScript library
// so jQuery is to JS what bootstrap is to css

// jQuery allows you to change stuff, but doesn't track changes
// in a big project this is confusing
// react, angular, and vue are the answers to this

// jQuery directly manipulates the DOM
// this is expensive, ie takes a lot of resources
// react and others use virtualDom, which is more efficient

// a $ means jQuery is being written

// console.log($);
// targeting stuff

$('.container'); //same as document.querySelector('.container)
$('#row'); // same as document.getElementById('#row')
$('#row p'); // grabs p tag inside of row 
//JQuery targets with css rules and adds listeners as methods
$('#hide').click(function(){
    // console.log("hide button clicked")
    $('#thing').hide();
}) 

$('#show').click(function(){
    $('#thing').show();
}) 

$('#toggle').click(function(){
    $('#thing').toggle();
}) 

$('#html').click(function(){
    $('#thing').html("<p>New HTML Here</p>")
})

$('#text').click(function(){
    $('#thing').text("Text Method")
})

//.ccs takes a JS object...
//key is a string for any css property
//value modifies key
$('#css').click(function(){
    $('#thing').css({
        "background-color": "green",
        "border-radius": "50%",
        "font-size": "100px"
    })
})

$('#add-class').click(function(){
    $('#thing').addClass('btn-danger')
})

$('#toggle-class').click(function(){
    $('#thing').toggleClass('btn-danger')
})

$('#prepend').click(function(){
    $('#thing').prepend('some text')
})

$('#append').click(function(){
    $('#thing').append('some text')
})

//fade toggle works the same as toggle but it ads an animated fade
$('#fade').click(function(){
    $('#thing').fadeToggle(1500)
})

$('#slide').click(function(){
    $('#thing').slideToggle(1500)
})

$('#animate').click(function(){
    $('#thing').animate({
        'height': '200px',
        'margin-left': '100px'
    }, 3000)
})

$('#goodbye').click(function(){
    $('#thing').animate({
        'margin-left': '10000px'
    }, 500)
})

$('#hello').click(function(){
    $('#thing').animate({
        'margin-left': '0px'
    }, 500)
})