/**
 * 移动端菜单功能
 * Mobile Menu Functionality
 */

$(document).ready(function() {
    // 汉堡菜单切换功能
    $('#mobileMenuToggle').click(function() {
        var isActive = $(this).hasClass('active');
        $(this).toggleClass('active');
        $('menu').toggleClass('mobile-active');
        
        if (isActive) {
            $('body').removeClass('menu-open');
        } else {
            $('body').addClass('menu-open');
        }
    });

    // 点击覆盖层关闭菜单
    $('menu').click(function(e) {
        if (e.target === this) {
            closeMenu();
        }
    });

    // 点击菜单项关闭菜单
    $('menu .menu li a').click(function() {
        closeMenu();
    });

    // 关闭菜单函数
    function closeMenu() {
        $('menu').removeClass('mobile-active');
        $('#mobileMenuToggle').removeClass('active');
        $('body').removeClass('menu-open');
    }

    // 窗口大小改变时关闭菜单
    $(window).resize(function() {
        if ($(window).width() > 768) {
            closeMenu();
        }
    });

    // ESC键关闭菜单
    $(document).keydown(function(e) {
        if (e.keyCode === 27) { // ESC key
            closeMenu();
        }
    });

    // 防止菜单内容区域的点击事件冒泡
    $('menu .menu').click(function(e) {
        e.stopPropagation();
    });
}); 