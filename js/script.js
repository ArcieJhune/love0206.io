$( document ).ready(() => {
    $(".envelope-wrapper .heart").click(() => {
      $('.envelope-wrapper').addClass('flap')
  });

  $(".envelope-wrapper .close-icon").click(() => {
      $('.envelope-wrapper').removeClass('flap')
  });
});