<template>
    <div class="hero-section hero-bg position-relative">
        <div class="container">
            <div class="main-max-width">
                <div class="hero-slider owl-carousel owl-theme">
                    <swiper
                    navigation
                    :slides-per-view="1"
                    :space-between="50"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                    >
                    <swiper-slide>
                                    <div class="silde-item">
                                        <div class="row align-items-center">
                                            <div class="col-lg-7">
                                                <div class="content">
                                                    <h4 class="sub-title mb-25">The Leader In Online Learning</h4>
                                                    <h1 class="fs-50 mb-25">Grow Your <span class="gradient-style">Skills</span> Advance Your Career Path.</h1>
                                                    <p>In the dynamic landscape of today's professional world, the key to success lies in continuous learning and skill Development. As industries evolve and technology advances,</p>

                                                    <div class="her-btns mt-40">
                                                        <a href="course-details.html" class="btn style-one mr-20">Browser Course <img src="./assets/img/icon/long-arrow.svg" alt="Image"></a>
                                                        <a href="about.html" class="btn style-two">Explore More<img src="./assets/img/icon/long-arrow.svg" alt="Image"></a>
                                                    </div>

                                                    <div class="book-icon bounce"><img src="./assets/img/icon/book.svg" alt="image"></div>
                                                    <div class="idea-icon"><img src="./assets/img/icon/idea.svg" alt="image"></div>
                                                    <div class="global-icon rotate"><img src="./assets/img/icon/global.svg" alt="image"></div>
                                                    <div class="shape1 rotate"><img src="./assets/img/icon/shape.svg" alt="image"></div>
                                                    <div class="shape2 moveHorizontal"><img src="./assets/img/icon/shape-2.svg" alt="image"></div>
                                                </div>
                                            </div>
                                            <div class="col-lg-5">
                                                <div class="hero-image position-relative">
                                                    <img class="position-relative index-2" src="./assets/img/all-img/hero-img.png" alt="image">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="silde-item">
                            <div class="row align-items-center">
                                <div class="col-lg-7">
                                    <div class="content">
                                        <h4 class="sub-title mb-25">The Leader In Online Learning</h4>
                                        <h1 class="fs-50 mb-25">Welcome To <span class="gradient-style">Online</span> Education Solutions.</h1>
                                        <p>In the dynamic landscape of today's professional world, the key to success lies in continuous learning and skill Development. As industries evolve and technology advances,</p>

                                        <div class="her-btns mt-40">
                                            <a href="course-details.html" class="btn style-one mr-20">Browser Course <img src="./assets/img/icon/long-arrow.svg" alt="Image"></a>
                                            <a href="about.html" class="btn style-two">Explore More<img src="./assets/img/icon/long-arrow.svg" alt="Image"></a>
                                        </div>

                                        <div class="book-icon bounce"><img src="./assets/img/icon/book.svg" alt="image"></div>
                                        <div class="idea-icon"><img src="./assets/img/icon/idea.svg" alt="image"></div>
                                        <div class="global-icon rotate"><img src="./assets/img/icon/global.svg" alt="image"></div>
                                        <div class="shape1 rotate"><img src="./assets/img/icon/shape.svg" alt="image"></div>
                                        <div class="shape2 moveHorizontal"><img src="./assets/img/icon/shape-2.svg" alt="image"></div>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="hero-image position-relative">
                                        <img class="position-relative index-2" src="./assets/img/all-img/hero-img2.png" alt="image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="silde-item">
                            <div class="row align-items-center">
                                <div class="col-lg-7">
                                    <div class="content">
                                        <h4 class="sub-title mb-25">The Leader In Online Learning</h4>
                                        <h1 class="fs-50 mb-25">Grow Your <span class="gradient-style">Skills</span> Advance Your Career Path.</h1>
                                        <p>In the dynamic landscape of today's professional world, the key to success lies in continuous learning and skill Development. As industries evolve and technology advances,</p>

                                        <div class="her-btns mt-40">
                                            <a href="course-details.html" class="btn style-one mr-20">Browser Course <img src="./assets/img/icon/long-arrow.svg" alt="Image"></a>
                                            <a href="about.html" class="btn style-two">Explore More<img src="./assets/img/icon/long-arrow.svg" alt="Image"></a>
                                        </div>

                                        <div class="book-icon bounce"><img src="./assets/img/icon/book.svg" alt="image"></div>
                                        <div class="idea-icon"><img src="./assets/img/icon/idea.svg" alt="image"></div>
                                        <div class="global-icon rotate"><img src="./assets/img/icon/global.svg" alt="image"></div>
                                        <div class="shape1 rotate"><img src="./assets/img/icon/shape.svg" alt="image"></div>
                                        <div class="shape2 moveHorizontal"><img src="./assets/img/icon/shape-2.svg" alt="image"></div>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="hero-image position-relative">
                                        <img class="position-relative index-2" src="./assets/img/all-img/hero-img.png" alt="image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="silde-item">
                            <div class="row align-items-center">
                                <div class="col-lg-7">
                                    <div class="content">
                                        <h4 class="sub-title mb-25">The Leader In Online Learning</h4>
                                        <h1 class="fs-50 mb-25">Welcome To <span class="gradient-style">Online</span> Education Solutions.</h1>
                                        <p>In the dynamic landscape of today's professional world, the key to success lies in continuous learning and skill Development. As industries evolve and technology advances,</p>

                                        <div class="her-btns mt-40">
                                            <a href="course-details.html" class="btn style-one mr-20">Browser Course <img src="./assets/img/icon/long-arrow.svg" alt="Image"></a>
                                            <a href="about.html" class="btn style-two">Explore More<img src="./assets/img/icon/long-arrow.svg" alt="Image"></a>
                                        </div>

                                        <div class="book-icon bounce"><img src="./assets/img/icon/book.svg" alt="image"></div>
                                        <div class="idea-icon"><img src="./assets/img/icon/idea.svg" alt="image"></div>
                                        <div class="global-icon rotate"><img src="./assets/img/icon/global.svg" alt="image"></div>
                                        <div class="shape1 rotate"><img src="./assets/img/icon/shape.svg" alt="image"></div>
                                        <div class="shape2 moveHorizontal"><img src="../assets/img/icon/shape-2.svg" alt="image"></div>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="hero-image position-relative">
                                        <img class="position-relative index-2" src="../assets/img/all-img/hero-img2.png" alt="image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default {
    name: 'HeaderComponent',
    components: {
        Swiper,
        SwiperSlide
    },
    setup () {
        const onSwiper = (swiper) => {
        console.log(swiper)
        }
        const onSlideChange = () => {
        console.log('slide change')
        }
        return {
        onSwiper,
        onSlideChange
        }
    }
}
</script>

<style scoped>
.book-icon {
    position: relative;
    top: -100px;
}
.bounce {
    position: relative;
    top: -100px;
}
.silde-item {
    padding-top: 0 !important;
}
.hero-section { 
    padding-top: 60px;
}
.hero-bg {
    background-image: url(./assets/img/banner/1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
}

.hero-section .silde-item {
    padding-top: 300px;
    padding-bottom: 130px;
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
}

.hero-section .content {
    text-align: start;
}

.hero-section .owl-theme .owl-nav.disabled+.owl-dots {
    margin-top: 0px;
    position: absolute;
    top: 50%;
    left: -50px;
}

.hero-section .owl-theme .owl-dots .owl-dot {
    display: block;
    zoom: 1;
    transition: var(--transition);
}

.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
    background: var(--mainColor);
}

.owl-theme .owl-dots .owl-dot span {
    width: 15px;
    height: 15px;
    border: 1px solid var(--mainColor);
    margin: 5px 0px;
    background: transparent;
    border-radius: 30px;
    transition: var(--transition);
}

.book-icon {
    position: absolute;
    top: 28%;
    left: 5%;
}

.idea-icon {
    position: absolute;
    top: 31%;
    left: 43%;
}

.global-icon {
    position: absolute;
    bottom: 14%;
    right: 50%;
}

.shape1 {
    position: absolute;
    top: 49%;
    right: 10%;
}

.shape2 {
    position: absolute;
    top: 35%;
    right: 31%;
}

.hero-image::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 200px;
    border-radius: 30px;
    background-color: var(--primaryColor);
    left: 0;
    bottom: 0;
    z-index: 0;
}

.banner-area {
    padding-top: 200px;
    padding-bottom: 100px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(./assets/img/banner/1.jpg);
}

.banner-content .title {
    margin-bottom: 50px;
    margin-right: 20px;
}

.banner-content .global-icon {
    top: -88px;
    right: 107px;
    max-width: 77px;
    position: absolute;
}

.banner-content .shape-icon {
    bottom: -128px;
    right: 142px;
    max-width: 77px;
    position: absolute;
}

.banner-content .title h1 {
    font-size: 50px;
    line-height: 1.3;
    margin-bottom: 20px;
}

.banner-content .banner-btn .contact {
    margin-left: 25px;
}

.banner-content .banner-btn .contact .icon {
    flex: 0 0 auto;
    font-size: 30px;
    margin-right: 15px;
    color: var(--blackColor);
}

.banner-content .banner-btn .contact .text a {
    font-size: 16px;
    font-weight: 600;
    color: var(--blackColor);
}

.banner-content .banner-btn .contact .text a:hover {
    color: var(--secondaryColor);
}

.banner-content .play-icon {
    width: 60px;
    height: 60px;
    font-size: 30px;
    line-height: 58px;
    text-align: center;
    border-radius: 100%;
    color: var(--mainColor);
    display: inline-block;
    border: 2px solid var(--mainColor);
}

.banner-content .play-icon i {
    left: 2px;
    position: relative;
}

.banner-content .play-icon:hover {
    border-color: var(--secondaryColor);
}

.banner-image {
    margin-right: -100px;
    margin-left: -40px;
}

.banner-image .image {
    margin-right: -70px;
}

.banner-image .image-3 {
    right: -71px;
    margin-top: -258px;
    position: relative;
}

.banner-image .image-3 .paly {
    top: 50%;
    left: 0;
    right: 0;
    width: 80px;
    height: 80px;
    margin: auto;
    font-size: 35px;
    line-height: 80px;
    position: absolute;
    text-align: center;
    border-radius: 100%;
    display: inline-block;
    color: var(--mainColor);
    transform: translateY(-50%);
    background-color: var(--whiteColor);
}

.banner-image .image-3 .paly:hover {
    color: var(--whiteColor);
    background-color: var(--secondaryColor);
}

.banner-image .image-3 .paly i {
    left: 2px;
    position: relative;
}

.banner-image .banner-shape {
    bottom: 50px;
    right: -16px;
    z-index: -1;
    position: absolute;
}

.banner-image .banner-complete {
    left: 51px;
    bottom: 31px;
    z-index: 1;
    padding: 20px;
    position: absolute;
    max-width: 240px;
    border-radius: 10px;
    background-color: var(--whiteColor);
    border-right: 7px solid rgba(246, 246, 246, 1);
    border-bottom: 7px solid rgba(246, 246, 246, 1);
}

.banner-image .banner-complete .icon {
    width: 70px;
    height: 70px;
    margin-left: -50px;
    margin-right: 20px;
    line-height: 70px;
    border-radius: 5px;
    text-align: center;
    display: inline-block;
    background-color: var(--primaryColor);
}

.banner-image .banner-complete .content span {
    margin-bottom: 10px;
    color: var(--mainColor);
}

.banner-image .banner-complete .content h5 {
    font-size: 35px;
    font-weight: 800;
    margin-bottom: 0;
    color: var(--mainColor);
}

.banner-warp-area {
    padding-top: 212px;
    padding-bottom: 100px;
    background-color: rgba(246, 246, 246, 1);
}

.banner-content .graph-shape {
    top: -56px;
    right: 147px;
    position: absolute;
}

.banner-content .graph-shape-2 {
    right: -47px;
    bottom: 30px;
    position: absolute;
}

.single-banner-warp-card {
    padding: 20px;
    max-width: 370px;
    margin-left: auto;
    border-radius: 5px;
    background-color: var(--whiteColor);
    box-shadow: 0px 5px 30px 0px rgba(0, 1, 17, 0.05);
}

.single-banner-warp-card .image {
    margin-bottom: 20px;
}

.single-banner-warp-card .image img {
    border-radius: 5px;
}

.single-banner-warp-card ul {
    margin-bottom: 15px;
}

.single-banner-warp-card ul li {
    margin-right: 3px;
}

.single-banner-warp-card ul li i {
    color: var(--secondaryColor);
}

.single-banner-warp-card ul li span {
    color: var(--mainColor);
}

.single-banner-warp-card ul li:last-child {
    margin-right: 0;
}

.single-banner-warp-card h3 {
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 20px;
}

.single-banner-warp-card span strong {
    color: var(--mainColor);
}

.owl-item.active .content .sub-title {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: fadeInLeft;
    animation-delay: 0.3s;
}

.owl-item.active .content h1 {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: fadeInLeft;
    animation-delay: 0.7s;
}

.owl-item.active .content p {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: fadeInLeft;
    animation-delay: 0.9s;
}

.owl-item.active .content .her-btns {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: fadeInLeft;
    animation-delay: 1.1s;
}

.owl-item.active .hero-image img {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: fadeInRight;
    animation-delay: 0.7s;
}

@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translate3d(-20%, 0, 0);
    }
    to {
        opacity: 1;
        transform: translateZ(0);
    }
}

@keyframes fadeInRight {
    0% {
        opacity: 0;
        transform: translate3d(20%, 0, 0);
    }
    to {
        opacity: 1;
        transform: translateZ(0);
    }
}

</style>
