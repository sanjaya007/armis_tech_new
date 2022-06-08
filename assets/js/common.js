$(window).on("load", function () {
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
});
