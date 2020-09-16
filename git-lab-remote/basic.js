$('#clickme').click(function() {
    $('#book').fadeOut('slow', function() {
      // Animation complete.
    });
  });
  $("p").click(function () {
       $(this).slideUp();
     });