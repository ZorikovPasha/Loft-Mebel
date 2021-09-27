
$(window).resize(function(event) {
  adaptive();
});

function adaptive() {
	let w = $(window).outerWidth();

  if ( w < 767 ) {
    const bottoms = $('.item__bottom')
    let i = 0
    $( '[data-color]' ).each(function() {
      $(this).appendTo( bottoms[i] )
      i++
    })
    i = 0
    $( '[data-size]' ).each(function() {
      $(this).appendTo( bottoms[i] )
      i++
    })
  }

  if ( w < 511 ) {
    const lines = $('.item__info-nums')
    let i = 0
    $( '[data-total]' ).each(function() {
      $(this).appendTo( lines[i] )
      i++
    })
  }


}
adaptive();