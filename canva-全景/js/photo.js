var canvaRoundAct = function(option) {
    var pc, can, ctx, imgW, imgH, speed, currentIndex, imgSrc, id, prePoint, currentPoint, dataImg;
    speed = option.speed; //设置间隔或速度
    imgSrc = option.imgSrc;
    id = option.id;
    pc = option.pc;
    can = document.getElementById(id);
    can.width = option.canWidth;
    can.height = option.canHeight;
    prePoint = {
        x: 0,
        y: 0
    };
    currentPoint = {
        x: 0,
        y: 0
    };

    dataImg = [];
    for (var i = option.range.from; i <= option.range.to; i++) {
        var theimg = imgSrc + i + ".jpg";
        dataImg.unshift(theimg);
    }
    console.log(dataImg, 'dataImg')
    currentIndex = parseInt(dataImg.length / 2);
    imgW = can.width;
    imgH = can.height;

    document.body.onload = start;

    function start() {
        ctx = can.getContext("2d");
        drawBackground(currentIndex);
        if (pc) can.addEventListener("mousemove", onMouseMove, false);
        else can.addEventListener("touchmove", onMouseMove, false);
    }

    function onMouseMove(e) {
        var is, f, speedFn;
        if (pc) {
            currentPoint = {
                x: e.clientX,
                y: e.clientY
            };
        } else {
            currentPoint = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
        }
        is = (currentPoint.x - prePoint.x); //判断是向那个水平方向旋转或移动
        speedFn = (is) => {
            if (is < speed) {
                return true;
            }
        }
        if (is > 0) {
            f = speedFn(is);
            if (f) return;
            if (currentIndex < dataImg.length - 1) {
                currentIndex++;
            } else {
                currentIndex = dataImg.length - 1;
            }
        } else {
            is = -is;
            f = speedFn(is);
            if (f) return;
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = 0;
            }
        }
        prePoint = currentPoint;
        drawBackground(currentIndex);
    }

    function drawBackground(which) {
        var img = new Image();
        img.src = dataImg[which];
        img.onload = function() {
            ctx.drawImage(img, 0, 0, imgW, imgH);
        };
    }
};