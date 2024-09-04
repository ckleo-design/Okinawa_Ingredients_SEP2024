function PageTopAnime() {
    var scroll = $(window).scrollTop()
    if (scroll >= 200) {
        $('.page-top').removeClass('remove')
        $('.page-top').addClass('display')
    } else {
        if ($('.page-top').hasClass('display')) {
            $('.page-top').removeClass('display')
            $('.page-top').addClass('remove')
        }
    }
}

$(window).scroll(function () {
    PageTopAnime() /* スクロールした際の動きの関数を呼ぶ*/
})

$(window).on('load', function () {
    PageTopAnime() /* スクロールした際の動きの関数を呼ぶ*/
})

$('.page-top').click(function () {
    $('body,html').animate(
        {
            scrollTop: 0 //ページトップまでスクロール
        },
        1200
    ) //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false //リンク自体の無効化
})
