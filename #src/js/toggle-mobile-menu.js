$('.menu-btn').on('click', function() {
  $('.mob-menu').addClass('opened')

  setTimeout( function() {
    $('.mob-menu__body').addClass('opened')
  }, 200)
  $('body').addClass('lock')
})

$('.mob-menu__close').on('click', function() {
  $('.mob-menu__body').removeClass('opened')

  setTimeout( function() {
    $('.mob-menu').removeClass('opened')
  }, 200)

  $('body').removeClass('lock')
})