$(window).on('load pageshow', function () {
  $('body').removeClass("off");
  $('body').addClass("on");
});
$("a:not([href*=\\#])").click(function () {
  if (!$(this).attr('target')) {
    $('body').removeClass("on");
    $('body').addClass("off");
    let url = $(this).attr('href');
    window.setTimeout(function () {
      window.location.href = url;
    }, 400);
    return false;
  }
});


$(function () {
  $(window).bind('resize', function () {
    resizeMe();
  }).trigger('resize');
});
//Standard height, for which the body font size is correct
var preferredHeight = 768;
//Base font size for the page
var fontsize = 20;

var displayHeight = $(window).height();
var percentage = displayHeight / preferredHeight;
var newFontSize = Math.floor(fontsize * percentage) - 1;
$("body").css("font-size", newFontSize);