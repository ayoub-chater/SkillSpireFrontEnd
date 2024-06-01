<template>
    <div class="testimonial-section custom-nav pb-100">
        <div class="container">
            <div class="main-max-width">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="content">
                            <h4 class="sub-title mb-25"># Client’s Testimonials</h4>
                            <h2 class="mb-30 fs-35">Let's what our student says</h2>
                            <p class="mb-50">The community created within the program is supportive and collaborative. I've had the opportunity to connect with fellow learners, share experiences, and even collaborate on projects. It truly feels like a learning journey.</p>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="testimonial-cards owl-carousel owl-theme">
                            <div class="testimonial-box">
                                <div class="info mb-25 d-flex align-items-center justify-content-between">
                                    <div class="image d-flex align-items-center">
                                        <img src="assets/img/all-img/student-rev.png" alt="image">
                                        <div class="content">
                                            <h5 class="fs-16">Jonson Maxwell</h5>
                                            <p class="mb-0">Customer</p>
                                        </div>
                                    </div>
                                    <div class="icon">
                                        <img src="assets/img/icon/quate-icon.svg" alt="icon">
                                    </div>
                                </div>
                                <div class="box-content">
                                    <p>The impact of consulting services was evident in the measurable results we achieved. Our organization is now better positioned for success, and our team is equipped with the knowledge and tools needed to navigate future
                                        challenges.</p>
                                </div>
                                <div class="ratings">
                                    <ul class="d-flex list-unstyle p-0">
                                        <li><i class="ri-star-fill"></i></li>
                                        <li><i class="ri-star-fill"></i></li>
                                        <li><i class="ri-star-fill"></i></li>
                                        <li><i class="ri-star-fill"></i></li>
                                        <li><i class="ri-star-fill"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="testimonial-box">
                                <div class="info mb-25 d-flex align-items-center justify-content-between">
                                    <div class="image d-flex align-items-center">
                                        <img src="assets/img/all-img/student-rev.png" alt="image">
                                        <div class="content">
                                            <h5 class="fs-16">Jonson Maxwell</h5>
                                            <p class="mb-0">Customer</p>
                                        </div>
                                    </div>
                                    <div class="icon">
                                        <img src="assets/img/icon/quate-icon.svg" alt="icon">
                                    </div>
                                </div>
                                <div class="box-content">
                                    <p>The impact of consulting services was evident in the measurable results we achieved. Our organization is now better positioned for success, and our team is equipped with the knowledge and tools needed to navigate future
                                        challenges.</p>
                                </div>
                                <div class="ratings">
                                    <ul class="d-flex list-unstyle p-0">
                                        <li><i class="ri-star-fill"></i></li>
                                        <li><i class="ri-star-fill"></i></li>
                                        <li><i class="ri-star-fill"></i></li>
                                        <li><i class="ri-star-fill"></i></li>
                                        <li><i class="ri-star-fill"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="testimonial-box">
                                <div class="info mb-25 d-flex align-items-center justify-content-between">
                                    <div class="image d-flex align-items-center">
                                        <img src="assets/img/all-img/student-rev.png" alt="image">
                                        <div class="content">
                                            <h5 class="fs-16">Jonson Maxwell</h5>
                                            <p class="mb-0">Customer</p>
                                        </div>
                                    </div>
                                    <div class="icon">
                                        <img src="assets/img/icon/quate-icon.svg" alt="icon">
                                    </div>
                                </div>
                                <div class="box-content">
                                    <p>The impact of consulting services was evident in the measurable results we achieved. Our organization is now better positioned for success, and our team is equipped with the knowledge and tools needed to navigate future
                                        challenges.</p>
                                </div>
                                <div class="ratings">
                                    <ul class="d-flex list-unstyle p-0">
                                        <li><i class="ri-star-fill"></i></li>
                                        <li><i class="ri-star-fill"></i></li>
                                        <li><i class="ri-star-fill"></i></li>
                                        <li><i class="ri-star-fill"></i></li>
                                        <li><i class="ri-star-fill"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="benefits-prev"><img src="assets/img/icon/long-arrow.svg" alt="Image"></div>
                        <div class="benefits-next"><img src="assets/img/icon/long-arrow.svg" alt="Image"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestimonialComponent'
}
</script>

<style scoped>
.testimonial-box {
    border: 1px solid var(--borderColor);
    padding: 30px 20px;
    border-radius: 20px;
    max-width: 350px;
    transition: var(--transition);
}

.testimonial-box .image img {
    margin-right: 10px;
}

.testimonial-box .content h5 {
    margin-bottom: 5px;
    transition: var(--transition);
}

.testimonial-box .content p {
    color: var(--secondaryColor);
    transition: var(--transition);
}

.testimonial-section .content .slider-btn {
    justify-content: start;
}

.testimonial-box .ratings li i {
    color: var(--secondaryColor);
    transition: var(--transition);
}

.testimonial-box .info .icon {
    opacity: 0;
}

.testimonial-cards .owl-item {
    left: -173px;
}

.testimonial-cards .owl-item.center .testimonial-box .info .icon {
    opacity: 1;
}

.testimonial-cards .owl-item.center {
    border-radius: 20px;
    background-color: var(--primaryColor);
    transition: var(--transition);
    justify-content: center;
}

.testimonial-cards .owl-item.center .testimonial-box {
    max-width: 100%;
}

.testimonial-cards .owl-item.center .testimonial-box {
    border-color: var(--primaryColor);
}

.testimonial-cards .owl-item.center .testimonial-box .content h5 {
    color: var(--whiteColor);
}

.testimonial-cards .owl-item.center .testimonial-box .content p {
    color: var(--whiteColor);
}

.testimonial-cards .owl-item.center .testimonial-box .box-content p {
    color: var(--whiteColor);
}

.single-testimonial-content {
    margin-bottom: 25px;
}

.single-testimonial-content h2 {
    font-size: 35px;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 20px;
}

.single-testimonial-content .btn {
    margin-top: 10px;
}

.single-testimonial-card {
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 25px;
    background-color: var(--whiteColor);
    border: 1px solid rgba(255, 255, 255, 1);
    box-shadow: 0px 5px 30px 0px rgba(0, 1, 17, 0.05);
}

.single-testimonial-card .user {
    margin-bottom: 15px;
}

.single-testimonial-card .user .image {
    display: block;
    flex: 0 0 auto;
    margin-right: 20px;
}

.single-testimonial-card .user .image img {
    width: 70px;
    height: 70px;
    border-radius: 100%;
}

.single-testimonial-card .user .content h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
}

.single-testimonial-card .review {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid rgba(198, 201, 212, 1);
}

.single-testimonial-card .review li {
    margin-right: 8px;
}

.single-testimonial-card .review li:last-child {
    margin-right: 0;
}

.single-testimonial-card .review li i {
    color: var(--secondaryColor);
}

.testimonial-slider-2 {
    margin-bottom: 25px;
}

.testimonial-slider-2.owl-theme .owl-dots .owl-dot.active span {
    background-color: var(--blackColor);
}

.testimonial-slider-2.owl-theme .owl-dots .owl-dot span {
    margin-right: 10px;
    border: unset;
    background-color: rgba(246, 246, 246, 1);
}

.testimonial-slider-2.owl-theme .owl-dots .owl-dot:hover span {
    background-color: var(--blackColor);
}

</style>
