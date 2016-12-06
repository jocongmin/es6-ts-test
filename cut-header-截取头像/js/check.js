$(function() {
    $('.cl-radio label').click(function() {
        $(this).siblings('label').removeClass('radio-on').find('input').prop('checked', false)
        $(this).addClass('radio-on').find('input').prop('checked', true)
    })
})

$(function() {
    $('.check').click(function() {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on').prop('checked', false)
        } else {
            if ($(this).hasClass('no')) {
                return false;
            }
            $(this).addClass('on').prop('checked', true)
        }
    })
})
var spellClassfn = {
    showPri: function() {
        $('.serch-pri').tap(function() {
            if ($(this).hasClass('on')) {
                $(this).removeClass('on').siblings('.pri-show').hide()
            } else {
                $(this).addClass('on').siblings('.pri-show').show()
            }
        })
    },
    start:function(){
      this.showPri();
    }
}
var tipHide=function(){
	var hideTip;
	hideTip=function(){
		$('.alert').hide();
	}
	setTimeout(hideTip, 2000);
}