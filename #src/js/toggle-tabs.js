$(function() {

  $('.product-tabs__title').on('click', function(e) {
    e.preventDefault()
    $('.product-tabs__title').removeClass('active')
    $(this).addClass('active')
    $('.product-content').removeClass('active')
    $( $(this).attr('href') ).addClass('active')
  })

})
