$(function() {

// Добавить в понравившиеся на карточке товара

  $('.item-sales__like').on('click', function() {
    if ( $(this).hasClass('active') ) {
      $(this).removeClass('active')
    }
    else {
      $(this).addClass('active')
    }
  })

  // Добавить в понравившиеся страница продукта

  $('.shop__wish').on('click', function(e) {
    e.preventDefault()
    $(this).toggleClass('active')
  })

  // Звездный рейтинг страница продукта

  $('.info__star').rateYo({
    ratedFill: "#000000",
    spacing: "3px",
    normalFill: "#D1D1D1",
    starWidth: "15px",
    readOnly: true,
    'starSvg': '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.94838 0.278719C7.86415 0.10805 7.69034 0 7.50001 0C7.30969 0 7.13587 0.10805 7.05165 0.278719L5.00476 4.42621L0.42816 5.09081C0.239806 5.11816 0.0833166 5.25008 0.0244934 5.43109C-0.0343298 5.6121 0.0147161 5.81081 0.151008 5.94366L3.46277 9.17185L2.68076 13.7306C2.64858 13.9182 2.72569 14.1078 2.87966 14.2196C3.03364 14.3315 3.23778 14.3463 3.40624 14.2577L7.50001 12.1054L11.5938 14.2577C11.7623 14.3463 11.9664 14.3315 12.1204 14.2196C12.2743 14.1078 12.3515 13.9182 12.3193 13.7306L11.5373 9.17185L14.849 5.94366C14.9853 5.81081 15.0344 5.6121 14.9755 5.43109C14.9167 5.25008 14.7602 5.11816 14.5719 5.09081L9.99527 4.42621L7.94838 0.278719Z" fill=""/></svg>'
  })



  $('.filter__range').ionRangeSlider()

  // фильтр по цветам каталог окрасить в цвет в зависимости от атрибута

  $('.colors__checkbox-fake').each(function() {
    $(this).css( {'background-color': $(this).attr('data-color') })
  })

  $('.item__remove').on('click', function() {
    const itemsChosen = $('.cart__item').length
    $(this).parent('.cart__item').addClass('removed')

    $('.cart__top-num').text(itemsChosen)
  })

  $('.item-sales').hover(
    function() {
      $(this).addClass('hovered')
      $(this).find('.item-sales__bottom').addClass('appeared')
    },
    function() {
      $(this).removeClass('hovered')
      $(this).find('.item-sales__bottom').removeClass('appeared')
    }
  )

})
