$(window).on("load", function () {
  // scroll ucd container
  let elementHeight;
  let firstBox, secondBox, thirdBox;

  $(".scroll-info").each(function (index, element) {
    switch (index) {
      case 0:
        firstBox = element.getBoundingClientRect().height;
        break;
      case 1:
        secondBox = element.getBoundingClientRect().height;
        break;
      case 2:
        thirdBox = element.getBoundingClientRect().height;
        break;
    }
  });

  if (firstBox === secondBox && firstBox === thirdBox) {
    elementHeight = firstBox;
  }

  $(window).on("resize", function () {
    $(".scroll-info").each(function (index, element) {
      switch (index) {
        case 0:
          firstBox = element.getBoundingClientRect().height;
          break;
        case 1:
          secondBox = element.getBoundingClientRect().height;
          break;
        case 2:
          thirdBox = element.getBoundingClientRect().height;
          break;
      }
    });

    if (firstBox === secondBox && firstBox === thirdBox) {
      elementHeight = firstBox;
    }
  });

  $(".scroll-wrapper").on("scroll", function () {
    const currentPosition = $(this).scrollTop();
    switch (currentPosition) {
      case 0:
        $(".scroll-ucd-list").removeClass("active");
        $("#firstScrollUcdList").addClass("active");
        break;
      case elementHeight:
        $(".scroll-ucd-list").removeClass("active");
        $("#secondScrollUcdList").addClass("active");
        break;
      case elementHeight * 2:
        $(".scroll-ucd-list").removeClass("active");
        $("#thirdScrollUcdList").addClass("active");
        break;
    }
  });

  //   mobile ucd container
  $(".mobile-ucd-list").on("click", function (e) {
    const currentId = $(this).attr("data-active");

    $(".mobile-ucd-list").removeClass("active");
    $(this).addClass("active");

    $(".mobile-ucd-info").hide();
    $(`#${currentId}`).fadeIn();
  });
});
