$(document).ready(function () {
    $('.menu-btn').click(function() {
        const $menuList = $('.menu__list');
        const $leftContent = $('.menu__list-left-content');
        const $menuIcon = $('.menuIcon');
        const isBurger = $menuIcon.attr('src') === 'images/menu-burger.svg';
        
        $menuList.toggleClass('open-nav');
        $leftContent.toggleClass('open');
        $menuIcon.attr('src', isBurger ? 'images/close.svg' : 'images/menu-burger.svg');
        $('body').toggleClass('overflow');
    });
});