<<<<<<< HEAD
$(document).ready(function () {
  var currentSection = 0;
  $('#content').hide();
  $('ul li a').click(function () {
    $('ul li a').removeClass('active');
    $(this).addClass('active');

    var href = $(this).attr('href');
    $('#isicontent>div').hide();

    $(href).show();

    if (currentSection == 0) {
      $('#content').slideToggle(200);
      currentSection = href;
    } else if (currentSection == href) {
      $('#content').slideToggle(200);
      currentSection = 0;
    } else {
      currentSection = href;
    }
    return false;
  });
});
=======
$(document).ready(function () {
  var currentSection = 0;
  $('#content').hide();
  $('ul li a').click(function () {
    $('ul li a').removeClass('active');
    $(this).addClass('active');

    var href = $(this).attr('href');
    $('#isicontent>div').hide();

    $(href).show();

    if (currentSection == 0) {
      $('#content').slideToggle(200);
      currentSection = href;
    } else if (currentSection == href) {
      $('#content').slideToggle(200);
      currentSection = 0;
    } else {
      currentSection = href;
    }
    return false;
  });
});
>>>>>>> 63981250649070da5c36b739d026c89c53cf2582
