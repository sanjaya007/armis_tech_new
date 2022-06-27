$(window).on("load", function () {
  // preloader
  $("#loaderBox").fadeOut(500, function () {
    $("#armisBody").removeClass("fixed-body");
    $(this).remove();
  });

  // mobile nav toggle
  $(".modal-wrapper").fadeOut(1000, function () {
    $(".modal-wrapper").remove();
    $("#modalScript").remove();
    $("#armisBody").removeClass("fixed-body");
  });

  $(".nav-tab").on("click", function () {
    $(".mobile-nav").animate({
      left: 0,
    });
    $("#armisBody").addClass("fixed-body");
  });

  $(".close-icon").on("click", function () {
    $(".mobile-nav").animate({
      left: "-100%",
    });
    $("#armisBody").removeClass("fixed-body");
  });

  // scroll effect
  let scrollStatus = true;
  $(window).on("scroll", function () {
    const currentPosition = $(this).scrollTop();
    if (scrollStatus) {
      scrollStatus = false;
      $(".cross-sign").addClass("active");
      resetRotate();
    }
  });

  function resetRotate() {
    setTimeout(function () {
      $(".cross-sign").removeClass("active");
      scrollStatus = true;
    }, 500);
  }

  // mouse cursor
  $(window).mousemove(function (e) {
    $("#mouseCursor").css({ top: e.pageY + "px", left: e.pageX + "px" });
    console.log(e.target);
  });
});
