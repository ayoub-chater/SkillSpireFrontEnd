<template>
    <div class="about-section pb-100">
        <div class="container">
            <div class="main-max-width">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="content">
                            <h4 class="sub-title mb-25"># About Us</h4>
                            <h2 class="mb-50 fs-35">Why Will You Choose Our?</h2>
                            <p class="mb-30">Delve into Insocour guided by industry experts and seasoned professionals. Our carefully curated curriculum is Designed to impart not just theoretical knowledge but practical insights gained from real-world experience.</p>
                            <p class="mb-30">Learn by doing. Our course emphasizes hands-on projects, case studies, and interactive sessions to ensure you can apply your newfound knowledge directly to real-world scenarios.</p>
                        </div>
                        <div class="about-meta d-flex align-items-center mt-40">
                            <div class="about-btn mr-20">
                                <a href="about.html" class="btn style-one box-shadow-1">About More<img src="./assets/img/icon/long-arrow.svg" alt="Image"></a>
                            </div>
                            <div class="info">
                                <div class="d-flex align-items-center">
                                    <h5 class="count">16</h5>
                                    <h5>+</h5>
                                </div>
                                <h5>Years Of Experiences</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-wrapper">

                            <div class="card about-card active" id="my-element1">
                                <h4 class="heading">Learn From The Experts</h4>
                                <div class="description">
                                    <div class="icon"><img src="./assets/img/icon/about-icon.svg" alt="icon"></div>
                                    <h4>Learn From The Experts</h4>
                                    <p>Stay committed to lifelong learning. Fields evolve, and staying informed about the latest Developments.</p>
                                    <a class="btn" href="about.html">Read More <img src="./assets/img/icon/long-arrow.svg" alt="Image"></a>
                                </div>
                            </div>

                            <div class="card about-card" id="my-element2">
                                <h4 class="heading">Seven Easy Rules Of Education</h4>
                                <div class="description">
                                    <div class="icon"><img src="./assets/img/icon/about-icon.svg" alt="icon"></div>
                                    <h4>Seven Easy Rules Of Education</h4>
                                    <p>Stay committed to lifelong learning. Fields evolve, and staying informed about the latest Developments.</p>
                                    <a class="btn" href="about.html">Read More <img src="./assets/img/icon/long-arrow.svg" alt="Image"></a>
                                </div>
                            </div>
                            <div class="card about-card" id="my-element3">
                                <h4 class="heading">Explore our Beliefs</h4>
                                <div class="description">
                                    <div class="icon"><img src="./assets/img/icon/about-icon.svg" alt="icon"></div>
                                    <h4>Explore our Beliefs</h4>
                                    <p>Stay committed to lifelong learning. Fields evolve, and staying informed about the latest Developments.</p>
                                    <a class="btn" href="about.html">Read More <img src="./assets/img/icon/long-arrow.svg" alt="Image"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutComponent'
}
</script>

<style scoped>
.about-section .about-meta .info h5 {
    background: var(--greadintColor);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.about-section .content {
    margin-right: 30px;
    border-bottom: 1px solid var(--borderColor);
}

.about-wrapper {
    height: 400px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: start;
}

.about-wrapper .card {
    width: 80px;
    border-radius: 20px;
    cursor: pointer;
    overflow: hidden;
    margin: 0 10px;
    display: flex;
    align-items: flex-end;
    transition: .6s cubic-bezier(.28, -0.03, 0, .99);
    background-color: var(--primaryColor);
    box-shadow: 0px 6px 30px 0px #573BFF4D;
}

.about-wrapper .card .icon {
    background: var(--offWhiteColor);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-bottom: 25px;
    text-align: center;
    line-height: 80px;
}

.about-wrapper .card .description {
    overflow: hidden;
    opacity: 0;
    transform: translateY(30px);
    transition-delay: .3s;
    transition: all .3s ease;
}

.about-wrapper .card h4 {
    font-size: 20px;
    margin-bottom: 25px;
    color: var(--whiteColor);
    position: relative;
    padding-left: 20px;
}

.about-wrapper .card .heading {
    font-size: 20px;
    margin-bottom: 25px;
    color: var(--whiteColor);
    position: absolute;
    padding-left: 20px;
    bottom: 10px;
    left: 0px;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
}

.about-wrapper input:checked+label .heading {
    opacity: 0 !important;
    transform: translateY(0) !important;
}

.about-wrapper .description h4::after {
    position: absolute;
    content: '';
    top: 12px;
    left: 0;
    height: 2px;
    width: 10px;
    background-color: var(--whiteColor);
    border-radius: 15px;
}

.about-wrapper .description p {
    color: var(--whiteColor);
    margin-bottom: 25px;
}

.about-wrapper input {
    display: none;
}

.about-wrapper .about-card.active {
    width: 350px;
    display: inline-block;
    padding: 20px;
}

.about-wrapper .about-card.active .description {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.about-wrapper .about-card.active .heading {
    opacity: 0;
}

.about-wrapper .card .btn {
    background-color: var(--whiteColor);
    padding: 20px 30px;
    border-radius: 10px;
}

.about-wrapper .card .btn:hover {
    background-color: var(--secondaryColor);
    color: var(--whiteColor);
}

.about-wrapper .card .btn:hover img {
    filter: brightness(0) invert(1);
}

.about-content {
    margin-bottom: 25px;
    margin-right: 20px;
}

.about-content .title {
    padding-bottom: 15px;
    margin-bottom: 30px;
    border-bottom: 1px solid #c6c9d4;
}

.about-content .title h1 {
    font-size: 50px;
    line-height: 1.3;
    margin-bottom: 30px;
}

.about-image {
    margin-top: 50px;
    margin-left: 43px;
}

.about-image.style-3 {
    margin-top: 0;
    margin-left: 0;
    margin-bottom: 25px;
}

.about-image img {
    border-radius: 10px;
}

.about-image .about-shape {
    top: -50px;
    left: -51px;
    z-index: -1;
}

.about-image .about-experiences-info {
    right: -80px;
    bottom: -45px;
    max-width: 313px;
    border-radius: 5px;
    position: absolute;
    display: inline-block;
    padding: 30px 30px 48px 30px;
}

.about-image .about-experiences-info h3 {
    font-size: 35px;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 0;
    color: var(--whiteColor);
}

.about-image .about-experiences-info h3 span {
    margin-right: 0;
}

.about-image .about-experiences-info .bg-shape {
    bottom: 0;
    left: 0;
    z-index: -1;
    position: absolute;
}

.about-content .resource-info {
    margin-top: 25px;
    margin-bottom: 15px;
}

.about-content .resource-info .info-item .icon {
    width: 60px;
    height: 60px;
    flex: 0 0 auto;
    margin-right: 20px;
    line-height: 60px;
    border-radius: 5px;
    text-align: center;
    display: block;
    background-color: rgba(246, 246, 246, 1);
}

.about-content .resource-info .info-item h3 {
    font-size: 20px;
    margin-bottom: 0;
}
</style>
