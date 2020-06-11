
$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-list");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > 100);
	});
});