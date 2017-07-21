/**
 * 响应式设计，调整rem参考值
 */
function fAutoResize() {
    var availWidth = document.documentElement.clientWidth || window.screen.width;
    var newFontSize = Math.round(16 * (availWidth / 375));
    
    document.documentElement.style.fontSize = newFontSize + 'px';
    var realfz = ~~(+(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace('px',''))*10000)/10000;
    // console.log(newFontSize, realfz);
    document.documentElement.style.fontSize = newFontSize*(newFontSize/realfz) + 'px';
}

// 云涛数据同步
function fSyncYunTao() {
    var downloadEsurfingAppBtn = document.getElementById('downloadEsurfingAppBtn');

    downloadEsurfingAppBtn.addEventListener('click', function(e) {
        _uxt.push(['_trackEvent', '天翼用户中心携手铂涛旅行送你99元体验券' , '点击', '客户端下载', 1]);
        window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=cn.com.chinatelecom.account';
    }, false);
}

document.addEventListener("DOMContentLoaded", function(event) {
    fAutoResize();
});

window.onload = function() {
    fSyncYunTao();

    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        handleFontSize();
    } else {
        if (document.addEventListener) {
            document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
        } else if (document.attachEvent) {
            document.attachEvent("WeixinJSBridgeReady", handleFontSize);
            document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
        }
    }    
    function handleFontSize() {
        // 设置网页字体为默认大小
        WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });        
        // 重写设置网页字体大小的事件
        WeixinJSBridge.on('menu:setfont', function() {
            WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
        });
    }

    // wap页面字体改变时，重新计算rem
    var ua = navigator.userAgent;
    var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
    var isIOS =  !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid || isIOS) {
        var oldFontSize = ~~(+(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace('px',''))*10000)/10000;
        var fontTimer = setInterval(function() {
            var newFontSize = ~~(+(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace('px',''))*10000)/10000;
            if (newFontSize != oldFontSize) {
                fAutoResize();
            }
        }, 700);
    }
}

window.onresize = fAutoResize;
window.onorientationchange = fAutoResize;
