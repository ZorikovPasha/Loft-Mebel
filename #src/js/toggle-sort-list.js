$('.controls__sort').on('click', function() {
  $(this).toggleClass('pressed')
})


$('.sort-list__item').on('click', function(e) {
  e.stopPropagation()
  $('.controls__sort').removeClass('pressed')
})