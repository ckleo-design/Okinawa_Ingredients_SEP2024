function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $('#page-top').removeClass('DownMove');
        $('#page-top').addClass('UpMove');
    } else {
        if ($('#page-top').hasClass('UpMove')) {
            $('#page-top').removeClass('UpMove');
            $('#page-top').addClass('DownMove');
        }
    }
}

$(window).scroll(function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

$(window).on('load', function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0 //ページトップまでスクロール
    }, 2500); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化
});

$(".js-support-title").click(function () {
    $(this).next().toggle("slow");
});

$(".openbtn1").click(function () {
    $(this).toggleClass('active');
    $(".header__inner__nav").toggleClass('active');
});
