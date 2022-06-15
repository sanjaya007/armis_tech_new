$(window).on("load", function () {
  // scroll product container
  $(".scroll-wrapper").on("scroll", function () {
    const currentPosition = $(this).scrollTop();
    if (currentPosition === 0) {
      $(".scroll-product-logo").removeClass("active");
      $("#firstScrollProductLogo").addClass("active");
    } else {
      $(".scroll-product-logo").removeClass("active");
      $("#secondScrollProductLogo").addClass("active");
    }
  });

  //   mobile product container
  $(".mobile-product-logo").on("click", function (e) {
    const currentId = $(this).attr("data-active");

    $(".mobile-product-logo").removeClass("active");
    $(this).addClass("active");

    $(".mobile-product-info").hide();
    $(`#${currentId}`).fadeIn();
  });
});
