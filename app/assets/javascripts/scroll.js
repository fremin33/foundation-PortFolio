(function() {
    var $win = $(window);

    function checkScroll() {
        if ($win.scrollTop() > 100) {
            $win.off('scroll');
            $('#education-1').fadeIn(5000);
            $('#education-2').fadeIn(6000);
            $('#education-3').fadeIn(7000);
            $('#education-4').fadeIn(8000);
    }
  }

    $win.scroll(checkScroll);
})();
