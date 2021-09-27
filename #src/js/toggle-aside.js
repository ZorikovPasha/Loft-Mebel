$(function() {

  $('.controls__toggle-aside').on('click', function() {


    setTimeout( function() {
      $('.aside').addClass('opened')
      $('.aside__box').addClass('opened')
    }, 100)
    $('body').addClass('lock')  

  })

  $('.aside__close').on('click', function(e) {
    e.preventDefault()
    $('.aside__box').removeClass('opened')
    $('.aside').removeClass('opened')
    $('body').removeClass('lock')

  })
  
  $(document).on('click', function(e) {
    
    if ( $('.aside').hasClass('opened') && $(e.target).closest('.aside').length == 0) {

      setTimeout( function() {
        $('.aside__box').removeClass('opened')
        $('.aside').removeClass('opened')  
      }, 100)
      $('body').removeClass('lock')
  
    }
  })

})