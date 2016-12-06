detectBottom = {
    tar: $('body'),
    getScrollTop: function() {
        var scrollPos;
        if (window.pageYOffset) {
            scrollPos = window.pageYOffset;
        } else if (document.compatMode && document.compatMode != 'BackCompat') {
            scrollPos = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollPos = document.body.scrollTop;
        }
        return scrollPos;
    },
    calc: function() {
        var $page = this.tar,
            sh = window.innerHeight,
            gh = this.getScrollTop(),
            ch = $page.get(0).scrollHeight;
        if (sh + gh >= ch) {
            return true;
        } else {
            return false;
        }
    }
}
