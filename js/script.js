//navbar collapse end
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

//event pd saat link di klik 
$('.nav-link').on('click', function(event){
    //ambil isi href
    var Tujuan = $(this).attr('href');
    //tangkap elemen ybs
    var elemenTujuan = $(Tujuan);

    //pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 70
    }, 500, 'swing');
    
    event.preventDefault();
});

//about 
$(window).on('load', function() {
    $('.pkiri').addClass('pshowup');
    $('.pkanan').addClass('pshowup');
})


//paralax
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    //jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/1.7 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/0.8 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/0.5 +'%)'
    });
    
    //portfolio
    if( wScroll > $('.portfolio').offset().top - 250 ) {
        $('.portfolio .card').each(function(i){
            setTimeout(function(){
                $('.portfolio .card').eq(i).addClass('showup');
            }, 300 * i);
        })
    }
});


