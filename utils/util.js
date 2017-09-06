function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
// 补零
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 验证手机号码
var Verification = (function(){
  var reg = {
    phone: /^1(3|4|5|7|8)\d{9}$/,                                  // 手机号
    email: /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/                // 邮箱
  }
  return reg;
}());

// 删除本地的Storage
var removeStorage = function (key) {         
    wx.removeStorage({            
        key: key,
        success: function (res) {
        }
    })
};
// 添加本地的Storage
var setStorage = function (key,val){
    wx.setStorage({                      
        key: key,
        data: val
    })
};

// 提示框
var showModal = function(title,text){
    if(arguments.length == 1) {
        text = arguments[0];
        title = null;
    }
    wx.showModal({
        title: title || "提示" ,
        showCancel: false,
        content: text
    });
}

// 配置域名
var url = (function(){
    return "https://m.12348.com.cn"
}());

module.exports = {
  formatTime: formatTime,                   // 计算时间
  Verification: Verification,                   // 验证手机号码
  removeStorage: removeStorage,     // 删除本地的Storage
  setStorage: setStorage,                   // 添加本地的Storage
  showModal: showModal,                 // 提示框
  url: url                                              // 配置url
}