$(function() {
    var hide = function() {
        $('.pay-disc,.mask').hide();
    };
    var show = function() {
        $('.pay-disc,.mask').show();
    }
    var showCardTip = function() {
        var card = $('.check.on').parents('li').attr('data-disc');
        var tar = $('#discount h4 em');
        var html = ":<b>" + card + "</b>";
        console.log(html);
        tar.html(html);
    }
    $('#discount').tap(function() {
        show();
    });
    $('.mask,#sure_disc').tap(function() {
        hide();
        var is=$(this).hasClass('mask');
        if(is){
          return;
        }
        showCardTip();
    });
    $('.check').click(function() {
        var t = $(this);
        t.parents('li').siblings().find('.check').removeClass('on');
        t.addClass('on');
    })
})
