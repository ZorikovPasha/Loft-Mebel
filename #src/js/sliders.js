$('.top__slider').slick({
  fade: true,
  infinite: false,
  prevArrow: '<button type="button" class="slick-btn slick-prev"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M30 0H0V30H30V0ZM12.2929 18.2929L11.5858 19L13 20.4142L13.7071 19.7071L17.7071 15.7071L18.4142 15L17.7071 14.2929L13.7071 10.2929L13 9.58579L11.5858 11L12.2929 11.7071L15.5858 15L12.2929 18.2929Z" fill="white"/></svg></button>',
  nextArrow: '<button type="button" class="slick-btn slick-next"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M30 0H0V30H30V0ZM12.2929 18.2929L11.5858 19L13 20.4142L13.7071 19.7071L17.7071 15.7071L18.4142 15L17.7071 14.2929L13.7071 10.2929L13 9.58579L11.5858 11L12.2929 11.7071L15.5858 15L12.2929 18.2929Z" fill="white"/></svg></button>',
})

$('.product__slider').slick({
  arrows: false,
  fade: true,
  swipe: false,
  asNavFor: '.product__thumbs',
})

$('.product__thumbs').slick({
  variableWidth: true,
  infinite: false,
  asNavFor: '.product__slider',
  prevArrow: '<button class="slick-btn slick-prev"><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 1L1.5 7L7.5 13" stroke="black" stroke-linecap="square"/></svg></button>',
  nextArrow: '<button class="slick-btn slick-next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L7 7L1 1" stroke="black" stroke-linecap="square"/></svg></button>',

})