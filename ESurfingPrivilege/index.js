/**
 * 响应式设计，调整rem参考值
 */
function fAutoResize() {
    var availWidth = document.documentElement.clientWidth || window.screen.width;
    var newFontSize = Math.round(16 * (availWidth / 375));
    // console.log('resize');·
    document.documentElement.style.fontSize = newFontSize + 'px';
}

document.addEventListener("DOMContentLoaded", function(event) {
    fAutoResize();
    
});

window.onload = function() {

    var flowBtn = document.getElementById('flowBtn');
    var readBillBtn = document.getElementById('readBillBtn');
    var nameVerifybtn = document.getElementById('nameVerifybtn');
    var getTicketBtn = document.getElementById('getTicketBtn');

    // 云涛统计信息
    flowBtn.addEventListener('click', function(e) {
        _uxt.push(['_trackEvent', '天翼特权大放送' , '点击', '充流量', 1]);
        window.location.href = 'app://recharge?rechargeType=2';
    }, false);
    readBillBtn.addEventListener('click', function(e) {
        _uxt.push(['_trackEvent', '天翼特权大放送' , '点击', '查询年度账单', 1]);
        window.location.href = 'http://user.e.189.cn/topic/creditResport/index.do?reqCT=true&channel=tysuit';
    }, false);
    nameVerifybtn.addEventListener('click', function(e) {
        _uxt.push(['_trackEvent', '天翼特权大放送' , '点击', '实名认证', 1]);
        window.location.href = 'http://user.e.189.cn/recharge/credit.do?reqCT=true';
    }, false);
    getTicketBtn.addEventListener('click', function(e) {
        _uxt.push(['_trackEvent', '天翼特权大放送' , '点击', '7天酒店领券', 1]);
        window.location.href = 'http://m.7daysinn.cn/maserati/ext/static/brands/brands.html?brandId_1&f=1';
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

window.onresize = fAutoResize;
window.onorientationchange = fAutoResize;


