$( function() {

  // стилизация всех селектов 

  $('.color-select').styler()
  $('.quintity-select').styler()
  $('.size-select').styler()
  $('.filter__select').styler()

  $('.color-select__option').each( function() {
    $(this).css( {'background-color': $(this).text() })
  })

  $('.color-select__option').on('click', function() {
    $('.color-select').find('.jq-selectbox__select-text').css({ 'background-color' : $(this).text() })
  })

})