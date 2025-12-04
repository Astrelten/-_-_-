document.addEventListener('DOMContentLoaded', function() {
    function initSwipers() {
        if (window.innerWidth <= 576) {
            const config = {
                slidesPerView: 'auto',
                spaceBetween: 16,
                freeMode: true,
                resistance: true,
                resistanceRatio: 0
            };
            
            if (document.querySelector('.popular__swiper').swiper) {
                document.querySelector('.popular__swiper').swiper.destroy(true, true);
            }
            if (document.querySelector('.blog__swiper').swiper) {
                document.querySelector('.blog__swiper').swiper.destroy(true, true);
            }
            if (document.querySelector('.gallery__swiper').swiper) {
                document.querySelector('.gallery__swiper').swiper.destroy(true, true);
            }
            
            new Swiper('.popular__swiper', config);
            new Swiper('.blog__swiper', config);
            new Swiper('.gallery__swiper', config);
        }
    }
    
    initSwipers();
    window.addEventListener('resize', initSwipers);
});