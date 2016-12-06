var app = getApp();
Page({
    data: {
        demo: 0
    },
    onLoad: function() {
        console.log(app, 'app');
        app.onShow = () => {
            console.log('onshow')
        }
    },
    changePic: function() {
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function(res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths;
                console.log(res);
                console.log(tempFilePaths);
            }
        })
    },
    changePic2: function() {
        wx.getImageInfo({
            src: '../../image/banner-img.jpg',
            success: function(res) {
                console.log(res.width)
                console.log(res.height)
            }
        })
    },
    record: function() {
        console.log('start record')
        wx.startRecord({
            success: function(res) {
                console.log(res,'res-record')
                var tempFilePath = res.tempFilePath;
                console.log(tempFilePath)
                wx.playVoice({
                    filePath: tempFilePath
                });
                setTimeout(function() {
                    wx.pauseVoice()
                }, 5000)
            },
            fail: function(res) {
                console.log(res, '录音失败')
            }
        })
    },
    stopRecord:function(){
      wx.stopRecord()
    }
})
