var $$ = mdui.$;
// 日夜切换
function change_style() {
    // 先判断body里面是否包含mdui-theme-layout-dark这个类
    if ($$('body').hasClass('mdui-theme-layout-dark')) {
        // 如果包含这个类的话，就删除这个类
        $$('body').removeClass('mdui-theme-layout-dark');
        // 并设置浏览器存储
        localStorage.setItem("change_theme", '2');
    } else {
        // 如果包含这个类的话，就添加这个类
        $$('body').addClass('mdui-theme-layout-dark');
        // 并且把存储值改成1
        localStorage.setItem("change_theme", '1');
    }
}
// 那么接下来就是判断存储的值了
// 假设值等于1，那我们就添加这个类
// 不然的话就删掉这个类
// 注意： 这一段是防止刷新之后恢复原来的颜色
if (localStorage.getItem("change_theme") == '1') {
    $$('body').addClass('mdui-theme-layout-dark');
} else {
    $$('body').removeClass('mdui-theme-layout-dark');
}
