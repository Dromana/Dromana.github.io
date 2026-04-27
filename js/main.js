/* Binders of sections  */
$(window).bind('scroll', function() {
    const scrollTop = $(window).scrollTop();
    if (scrollTop >= $('#projects').offset().top) {
        current_working_words = companys;
    } else if (scrollTop >= $('#experience').offset().top) {
        current_working_words = companys;
    } else if (scrollTop >= $('#about_me').offset().top) {
        current_working_words = about_me;
    } else if (scrollTop >= $('#header').offset().top) {
        current_working_words = skills;
    }
});

function move_to(section_id){
    window.location.hash = section_id;
}

function animate_text(){
    text_animation('ml2')
    text_animation('ml3')
}

$(document).ready(function() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    current_working_words = skills;
    animate_text();
});

setTimeout(function(){ animate() }, 3000);

function text_animation(class_id){
    var textWrapper = document.querySelector('.' + class_id);
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false}).add({
        targets: '.' + class_id + ' .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 70 * i
    })/* .add({
        targets: '.ml2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    }) */;
}
