$(function () {
    // Auto play modal video
    $(".video").click(function () {
        let theModal = $(this).data("bsTarget");
        let videoSRC = $(this).attr("data-bs-video");
        let videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.btn-close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
});

$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
