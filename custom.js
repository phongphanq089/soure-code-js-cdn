// language
$(".titleLanguage").on("click", function () {
  $("body").toggleClass("showLanguage");
  $(".dropdownLanguage").slideToggle();

  if ($(".showMenu").length) {
    $("body").removeClass("wrapHidden showMenu");
  }
});

$("body, html").on("click", function (e) {
  var target = $(e.target);
  if (
    e.type == "focusin" ||
    target.closest(this.element).length ||
    target.closest(this.container).length ||
    target.closest(".wrapLanguage").length
  )
    return;

  if ($("body").hasClass("showLanguage")) {
    $("body").removeClass("showLanguage");
    $(".dropdownLanguage").slideUp();
  }
});
// end language

// menu
function fixedMenu() {
  if ($(".wrapHeader").length) {
    var windowScrollTop = $(window).scrollTop();
    var heightHeader = 30;

    if ($(window).width() <= 1220) heightHeader = -1;

    if (windowScrollTop > heightHeader) $("body").addClass("fixedMenu");
    else $("body").removeClass("fixedMenu");
  }
}

$(".wrapBtnCtrMenuHeader .btnCtrMenu").on("click", function (e) {
  $("body").toggleClass("showMenu wrapHidden");
  e.preventDefault();

  if ($(".showContact").length) {
    $("body").removeClass("showContact wrapHidden");
  }
});

$(".wrapCloseMenuHeaderMobile").on("click", function (e) {
  $("body").removeClass("showMenu wrapHidden");
  e.preventDefault();
});

$(".btnDropdownMenuSub").on("click", function (e) {
  $(this).next(".wrapMenuHeader").slideToggle();
  $(this).parent(".menuSub").toggleClass("activeMenu");

  e.preventDefault();
});

$(window).on("load", function () {
  fixedMenu();
});

$(window).on("scroll", function () {
  fixedMenu();
});
$(window).on("load", function () {
  //====== hero slider 3 ========== ///
  if ($(".wrapperSlider").length) {
    var swiper = new Swiper(".wrapperSlider", {
      loop: true,
      speed: 600,
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
});

$(window).on("load", function () {
  if ($(".listGalleryImage").length) {
    $(".listGalleryImage").lightGallery({
      showThumbByDefault: true,
      download: false,
      fullScreen: false,
      zoom: false,
      scale: false,
      autoplayControls: false,
      share: false,
      counter: false,
      getCaptionFromTitleOrAlt: false,
      thumbnail: false,
    });
  }
});

$(window).on("load", function () {
  if ($(".listGalleryVideo .wraperVideoItems").length) {
    $(".listGalleryVideo .wraperVideoItems").each(function (index) {
      var linkItem = $(this).attr("data-src");

      var checkYoutube = linkItem.search("youtube");

      var htmlVideo = "";

      if (checkYoutube < 0) {
        $(this).attr("data-html", "#video" + index);

        htmlVideo =
          '\n \
                    <div style="display:none;" id="video' +
          index +
          '">\n \
                        <video class="lg-video-object lg-html5 video-js vjs-default-skin" controls preload="none">\n \
                            <source src="' +
          linkItem +
          '" type="video/mp4">\n \
                        </video>\n \
                    </div>\n \
                ';

        $(".wrapperGalaryVideoDetail .listVideos").append(htmlVideo);

        $(this).removeAttr("data-src");
      }
    });

    $(".listGalleryVideo").lightGallery({
      showThumbByDefault: true,
      download: false,
      fullScreen: false,
      zoom: false,
      scale: false,
      autoplayControls: false,
      videojs: true,
      share: false,
      counter: false,
      getCaptionFromTitleOrAlt: false,
      thumbnail: false,
      controls: false,
    });
  }
});
