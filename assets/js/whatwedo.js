$(window).on("load", function () {
  //   mobile product container
  $(".mobile-product-logo").on("click", function (e) {
    const currentId = $(this).attr("data-active");

    $(".mobile-product-info").hide();
    $(`#${currentId}`).fadeIn();
  });
});
