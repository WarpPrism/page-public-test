/**
 * 响应式设计，调整rem参考值
 */
function fAutoResize() {
    var availWidth = document.documentElement.clientWidth || window.screen.width;
    var newFontSize = Math.round(16 * (availWidth / 375));
    document.documentElement.style.fontSize = newFontSize + 'px';
}

document.addEventListener("DOMContentLoaded", function(event) {
    fAutoResize();
});

window.onload = function() {
    var downloadEsurfingAppBtn = document.getElementById('downloadEsurfingAppBtn');
    window.onresize = fAutoResize;
    window.onorientationchange = fAutoResize;

    downloadEsurfingAppBtn.addEventListener('click', function(e) {
        _uxt.push(['_trackEvent', '天翼用户中心携手铂涛旅行送你99元体验券' , '点击', '客户端下载', 1]);
        window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=cn.com.chinatelecom.account';
    }, false);

    if (typeof(WeixinJSBridge) == "undefined") {  
        document.addEventListener("WeixinJSBridgeReady", function (e) {  
            setTimeout(function(){  
                WeixinJSBridge.invoke('setFontSizeCallback',{"fontSize":0}, function(res) {  
                    // alert(JSON.stringify(res));  
                });  
            },0);  
        });  
    } else {  
        setTimeout(function(){  
            WeixinJSBridge.invoke('setFontSizeCallback',{"fontSize":0}, function(res) {  
                // alert(JSON.stringify(res));  
            });  
        },0);  
    }
}


