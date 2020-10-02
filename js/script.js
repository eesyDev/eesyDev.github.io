const mySwiper = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    speed: 500,
    mousewheel: true,
    keyboard: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    scrollbar: {
        el: '.swiper-scrollbar'
    }
});

const swiperH = new Swiper('.swiper-container-h', {
    speed: 300,
    keyboard: true,
    pagination: {
      el: '.swiper-pagination-h',
      clickable: true
    }
});

let text = baffle('.textEffect');
text.reveal([1000], [2000]),
text.start (3000),
text.set ({
    // characters: '¿⊥∠√∧@$&†¤¢∂≡£∨¬α∧',
    characters: 'אגהזלקמ',
    speed: 120
});

new TypeIt(".text", {
    waitUntilVisible: true,
    startDelay: 3000,
    speed: 50
})
.type('<label style="margin-bottom: 15px">Hi!</label>')
.type(`<label style="margin-bottom: 15px; padding-left:10px">I am practicing alcoholic</label>`, {delay: 1500})
.delete(9, {speed: 150})
.type('developer')
.break({delay: 200})
.type('I specialize in creating landing pages and WordPress themes')
.pause(300)
.break({delay: 200})

.type('My main goal is long-term relationships with my clients, so I am ready to lead you to a successful launch of the project and advise you after')
.move(-6)
.delete(3)
.type('u')
.move('END')
.break({delay: 200})

.type('<label style="line-height:3">The services I provide:</label>')
.break({delay: 800})

.type('<label style="padding-left:20px; color:#FC4445">✓ </label>Create website on cleab HTML', {speed: 0})
.move(-5)
.type('n')
.move(-1)
.delete(1)
.move('END')
.break({delay: 200})

.type('<label style="padding-left:20px; color:#FC4445">✓ </label>Create WordPress theme', {speed: 0})
.break({delay: 200})

.type('<label style="padding-left:20px; color:#FC4445">✓ </label>Installing and configuring the WordPress theme', {speed: 0})
.break({delay: 200})

.type('<label style="padding-left:20px; color:#FC4445">✓ </label>Adapting an existing website or WP theme', {speed: 0})
.break({delay: 200})

.type('<label style="padding-left:20px; color:#FC4445">✓ </label>Fixing of visual errrs on the website', {speed: 0})
.move(-16)
.delete(4)
.type('bug', {speed: 400})
.move('END')
.break({delay: 250})

.type('<label style="padding-left:20px; color:#FC4445">✓ </label>Transferring a website to another domain / hosting', {speed: 0})
.break({delay: 200})

.type('<label style="padding-left:20px; color:#FC4445">✓ </label>Deploying a website from a local server to real', {speed: 0})
.break({delay: 200})
.break({delay: 200})
.type('My understanding of cooperation makes me give all my best, so if you are looking for a reliable person who will help solve your problem, <a href="mailto:amirkhanov.official@gmail.com" style="color:#FC4445; text-decoration:none">write!</a>', {speed: 30})
.break({delay: 500})
.type('<label style="line-height:3">I will be glad to help</label>')
.go();