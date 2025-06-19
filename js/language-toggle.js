/**
 * 语言切换功能
 * Language Toggle Functionality
 */

$(document).ready(function() {
    // 检测是否是中文页面
    var isZh = location.href.includes("zh");
    
    // 设置body的语言类
    document.body.className = isZh ? "zhBody" : "enBody";
    
    // 设置语言切换按钮文本
    var langBtn = document.getElementById("langBtn");
    if (langBtn) {
        langBtn.innerHTML = isZh ? "EN" : "中文";
        
        // 语言切换点击事件
        langBtn.onclick = function () {
            var path = location.pathname.split("zh").pop();
            location.href = isZh ? path : "/zh" + path;
        };
    }
}); 