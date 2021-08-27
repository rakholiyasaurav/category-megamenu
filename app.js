// $('.nav-item.megamenu').hover(function(){
//     $(this).find('ul li:first .tab-content').show();
// });
// $('.nav-item.megamenu ul li:first').mouseout(function(){
//     $(this).find('.tab-content').hide();
// });
// $('.nav-item.megamenu ul li:first').mouseenter(function(){
//     $(this).find('.tab-content').show();
// })

$('.megamenu-category-name #pills-tab li:first-child').addClass('active megamenu-arrow');
$('#pills-tab li').mouseenter(function () {
    $('#pills-tabContent .tab-content').show();
    $('#pills-tab li').removeClass('active');
    $(this).addClass('active');
    $(this).find('.menu-img img').addClass('opacity-active');
});