$(
  function(){
    $("table").addClass("table table-condensed table-bordered table-striped");
  }
);
var smalldevice = false;
$(function() {
  // run test on initial page load
  checkSize();
  // run test on resize of the window
  $(window).resize(checkSize);
});

function checkSize(){
  if ($(window).width() <= 996){
    smalldevice = true;
  }
};

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    var target_pos = ($($anchor.attr('href')).length > 0) ? $($anchor.attr('href')).offset().top : 0;
    var fhdr = $('navbar');
    var fhdr_height = (fhdr.length > 0) ? fhdr.outerHeight() : 0;
    target_pos -= fhdr_height + 70;
    $('html, body').stop().animate({
      scrollTop: target_pos
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
});

//Navbar Box Shadow on Scroll
$(function(){
  var navbar = $('.navbar');
  $(window).scroll(function(){
    if($(window).scrollTop() <= 40){
      navbar.css('box-shadow', 'none');
    } else {
      navbar.css('box-shadow', '0px 0px 25px rgba(0, 0, 0, 0.4)');
    }
  });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

// floating form
$(function() {
  console.log(smalldevice);
  //if (smalldevice == true){
  $("#feedback-tab").click(function() {
    $("#feedback-form").toggle("slide");
  //  setTimeout(function(){ $("#feedback-form").toggle("slide").show(); }, 8000);
  });
  //}
  // show form after specifed timeout
  if(smalldevice == false) {
    setTimeout(function(){ $("#feedback-form").show(); }, 18000);
  };
  $("#feedback-form form").on('submit', function(event) {
    var $form = $(this);
    $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize(),
      success: function() {
        $("#feedback-form").toggle("slide").find("textarea").val('');
      }
    });
    event.preventDefault();
  });
});
