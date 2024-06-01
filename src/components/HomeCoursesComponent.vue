<script setup>
import { onMounted, ref, computed } from 'vue';
import { useFomations } from "../stores/counter";

const Fomations = useFomations();
const formations = ref([]);

onMounted(async () => {
    await Fomations.fetchFormations();
    formations.value = Fomations.formations;
    console.log(formations.value);
});

const limitedFormations = computed(() => {
    return formations.value.slice(0, 6);
});
</script>


<template>
    <div class="course-section pb-100">
        <div class="container">
            <div class="main-max-width">
                <div class="section-title mb-50 position-relative">
                    <h4 class="sub-title mb-25"># Our Courses List</h4>
                    <h2 class="fs-35">Broad Selection Of Course</h2>

                    <div class="sorting-menu">
                        <ul>
                            <li class="filter active" data-filter="all">All Courses</li>
                            <li class="filter" data-filter=".Design">UI&UX Design</li>
                            <li class="filter" data-filter=".Business">Business</li>
                            <li class="filter" data-filter=".Development">Development</li>
                        </ul>
                    </div>
                </div>
                <div id="mix-wrapper" class="course-mix-wrapper">
                    <div class="row">
                            <div v-for="formation in limitedFormations" :key="formation.id" class="col-lg-4 col-sm-6">
                                <div class="single-courses-box mb-25 box-shadow-2">
                                    <router-link :to="'/courses/' + formation.id">
                                        <div class="image mb-20 position-relative">
                                            <a href="course-details.html" class="d-block">
                                                <img :src="`./assets/img/all-img/${formation.image_path}`" alt="image">
                                                </a>
                                            <div class="cr-option">
                                                <a href="author.html"><i class="ri-heart-fill"></i></a>
                                                <a href="author.html"><i class="ri-shopping-basket-fill"></i></a>
                                            </div>
                                            <div class="cr-tag">
                                                <a href="./course-details.html">{{ formation.centre.name.toUpperCase() }}</a>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <div class="meta-info mb-20 d-flex align-items-center justify-content-between">
                                                <div class="author d-flex align-items-center">
                                                    <img :src="`./assets/img/all-img/${formation.professor.image_path}`" alt="image">
                                                    <span>{{ formation.professor_name.toUpperCase() }}</span>
                                                </div>
                                                <div class="cr-price">
                                                    <h5 class="fs-16"><span class="price">{{ formation.price }}/</span> <span class="old-price">$400</span></h5>
                                                </div>
                                            </div>
                                            <h3 class="mb-15 fs-20"><a href="blog-details.html">{{ formation.title }}</a></h3>
                                            <div class="ratings mb-20">
                                                <ul class="d-flex list-unstyle p-0">
                                                    <li><i class="ri-star-fill"></i></li>
                                                    <li><i class="ri-star-fill"></i></li>
                                                    <li><i class="ri-star-fill"></i></li>
                                                    <li><i class="ri-star-fill"></i></li>
                                                    <li><i class="ri-star-fill"></i></li>
                                                    <li><span>(45)</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <ul class="cr-items d-flex list-unstyle">
                                            <li class="mr-15"><i class="ri-vidicon-fill"></i> <span>Salle : {{ formation.salle.id }}</span> </li>
                                            <li><i class="ri-time-line"></i> <span>{{ formation.start_date.split(' ')[0] }}  =>  {{ formation.end_date.split(' ')[0] }}</span></li>
                                        </ul>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.course-mix-wrapper .mix-target {
    display: block !important;
}
.course-section .sorting-menu {
    position: absolute;
    bottom: 5px;
    right: 0;
}

.sorting-menu ul {
    list-style: none;
    display: flex;
    padding: 0px;
    margin-bottom: 10px;
    position: relative;
    transition: var(--transition);
}

.sorting-menu ul::after {
    position: absolute;
    content: '';
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 5px;
    border-radius: 15px;
    transition: var(--transition);
    background-color: var(--offWhiteColor);
}

.sorting-menu ul li {
    color: var(--mainColor);
    font-size: 16px;
    margin-right: 35px;
    font-weight: 600;
    transition: var(--transition);
    cursor: pointer;
}

.sorting-menu ul li:last-child {
    margin-right: 0px;
}

.sorting-menu ul .active {
    position: relative;
}

.sorting-menu ul .active:after {
    position: absolute;
    content: '';
    height: 5px;
    width: 50px;
    border-radius: 30px;
    top: 33px;
    left: 22px;
    background: var(--primaryColor);
    z-index: 1;
    transition: var(--transition);
}

.course-section .sorting-menu.style-2 {
    position: unset;
}

.sorting-menu.style-2 ul {
    margin-bottom: 0;
    display: inline-block;
}

.sorting-menu.style-2 ul::after {
    display: none;
}

.sorting-menu.style-2 ul li {
    padding: 6px 16px;
    margin-right: 20px;
    border-radius: 5px;
    display: inline-block;
    background-color: rgba(246, 246, 246, 1);
}

.sorting-menu.style-2 ul li:last-child {
    margin-right: 0;
}

.sorting-menu.style-2 ul li:hover {
    color: var(--whiteColor);
    background-color: var(--secondaryColor);
}

.sorting-menu.style-2 ul .active:after {
    display: none;
}

.sorting-menu.style-2 ul .active {
    color: var(--whiteColor);
    background-color: var(--secondaryColor);
}

.course-mix-wrapper .mix-target {
    display: none;
}

.single-courses-box.style-2 {
    padding: 15px;
    border-radius: 5px;
    border: 1px solid rgba(198, 201, 212, 1);
    box-shadow: 0px 5px 30px 0px rgba(0, 1, 17, 0.05);
}

.single-courses-box.style-2 .cr-tag a {
    top: 20px;
    left: 0;
    padding: 6px 20px;
    box-shadow: unset;
    position: absolute;
    color: var(--whiteColor);
    border-radius: 0px 5px 5px 0px;
    background-color: var(--secondaryColor);
}

.single-courses-box.style-2 .cr-tag a:hover {
    color: var(--blackColor);
}

.single-courses-box .image img {
    width: 100%;
}

.single-courses-box .cr-option {
    position: absolute;
    top: 10%;
    left: 5%;
    display: block;
}

.single-courses-box .cr-option a {
    height: 45px;
    width: 45px;
    text-align: center;
    line-height: 45px;
    font-size: 25px;
    color: var(--whiteColor);
    background: #6163644d;
    display: block;
    border-radius: 30px;
    margin-bottom: 15px;
}

.single-courses-box .cr-option a:last-child {
    margin-bottom: 0px;
}

.single-courses-box .cr-option a:hover {
    color: var(--secondaryColor);
}

.single-courses-box .cr-tag a {
    position: relative;
    padding: 10px 25px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 16px;
    top: -10px;
    left: 15px;
    color: var(--mainColor);
    transition: var(--transition);
    background-color: var(--whiteColor);
    box-shadow: 3px 3px 0 1px var(--primaryColor);
}

.single-courses-box .cr-tag :hover {
    background-color: var(--primaryColor);
    color: var(--whiteColor);
    box-shadow: 0px 6px 30px 0px #573BFF4D;
}

.single-courses-box.style-2 .content {
    padding: 0;
}

.single-courses-box .content .author img {
    margin-right: 15px;
}

.single-courses-box .content .author span {
    color: var(--mainColor);
    font-weight: 600;
}

.single-courses-box .content {
    padding: 0 20px;
}

.single-courses-box .content h3 {
    line-height: 32px;
}

.single-courses-box .cr-price .price {
    color: var(--secondaryColor);
}

.single-courses-box .cr-price .old-price {
    position: relative;
}

.single-courses-box .cr-price .old-price::after {
    position: absolute;
    content: '';
    top: 8px;
    left: -1px;
    width: 40px;
    height: 1px;
    background-color: var(--mainColor);
}

.single-courses-box .ratings li i {
    color: var(--secondaryColor);
}

.single-courses-box .ratings span {
    margin-left: 10px;
    font-size: 15px;
    color: var(--mainColor);
    position: relative;
    top: 2px;
}

.single-courses-box .cr-items {
    padding: 10px 20px 20px;
    border-top: 1px solid var(--borderColor);
}

.single-courses-box.style-2 .cr-items {
    padding: 0;
    padding-top: 15px;
}

.single-courses-box.style-2 .cr-items li .btn {
    color: var(--mainColor);
    background-color: rgba(246, 246, 246, 1);
}

.single-courses-box.style-2:hover .btn:before {
    width: 120%;
    visibility: visible;
    opacity: 1;
}

.single-courses-box.style-2:hover .cr-items li .btn {
    color: var(--whiteColor);
}

.single-courses-box.style-2:hover .cr-items li .btn i {
    color: var(--whiteColor);
}

.single-courses-box.style-2 .cr-items li {
    margin-right: 30px;
}

.single-courses-box.style-2 .cr-items li:last-child {
    margin-right: 0;
}

.single-courses-box.style-2 .cr-items li i {
    font-size: 16px;
    color: var(--mainColor);
    transition: var(--transition);
}

.single-courses-box.style-2 .cr-items li .btn {
    padding: 8px 20px;
    border-radius: 5px;
}

.single-courses-box.style-2 .cr-items li span {
    color: var(--mainColor);
}

.single-courses-box .cr-items li i {
    color: var(--secondaryColor);
    font-size: 20px;
}

.single-courses-box .cr-items li {
    margin-right: 10px;
}

.single-courses-box .cr-items li span {
    color: var(--mainColor);
}

.single-courses-box.style-two .cr-tag a {
    position: absolute !important;
    top: 76%;
    left: 20px;
}

.single-courses-box.style-two .content {
    padding: 0 20px 0 0;
}

.single-courses-box.style-two .cr-items {
    padding: 10px 20px 0px 0;
}

.edu-courses-area .result-count .courbtn {
    padding: 18px 18px;
    font-size: 28px;
    border-radius: 5px;
    line-height: 0px;
    margin-right: 12px;
    color: var(--blackColor);
    background-color: #f8f8f8;
    display: inline-block;
}

.edu-courses-area .result-count .courbtn:hover {
    color: var(--whiteColor);
    background-color: var(--secounderyColor);
}

.edu-courses-area .result-count .courbtn:last-child {
    margin-right: 0px;
}

.active-courbtn {
    color: var(--whiteColor) !important;
    background-color: var(--secounderyColor) !important;
}

.edu-courses-area .result-count p {
    display: inline-block;
    font-size: 15px;
    color: var(--mainColor);
}

.edu-grid-sorting {
    margin-bottom: 50px;
    padding: 15px;
    border-radius: 5px;
}

.edu-grid-sorting .nice-select select {
    display: inline-block;
    background: var(--whiteColor);
    border-color: var(--borderColor);
    color: var(--mainColor);
    padding: 0 20px 0 20px;
    height: 40px;
    line-height: 40px;
    border-radius: 30px;
    font-size: 15px;
    float: unset;
    -webkit-transition: var(--transition);
    transition: var(--transition);
}

.edu-grid-sorting .nice-select option {
    font-size: 15px;
    padding-left: 20px;
    padding-right: 85px;
}

.fitter-option .item a {
    margin-right: 30px;
    position: relative;
}

.fitter-option .item a:hover {
    color: var(--primaryColor);
}

.fitter-option .item a:hover span {
    color: var(--primaryColor);
}

.fitter-option .item a.active .icon,
.fitter-option .item a.active span {
    color: var(--primaryColor) !important;
}

.fitter-option .item a:last-child {
    margin-right: 0px;
}

.fitter-option .item a::after {
    position: absolute;
    content: '';
    top: 6px;
    right: -16px;
    height: 16px;
    width: 3px;
    background-color: var(--borderColor);
}

.fitter-option .item a:last-child::after {
    display: none;
}

.fitter-option .item a .icon {
    margin-right: 5px;
    font-size: 20px;
}

.fitter-option .item span {
    font-size: 16px;
    font-weight: 600;
    color: var(--mainColor);
}

.edu-grid-sorting.style-one {
    margin-bottom: 30px;
    padding: 20px 0;
    background: transparent;
}

.grid-short {
    margin-right: 13px;
}

.grid-short .accordion-item {
    border: none;
}

.grid-short:last-child {
    margin-right: 0px;
}

.grid-short .accordion-button {
    background-color: var(--offWhiteColor);
    border: none;
    box-shadow: none;
    transition: var(--transition);
}

.grid-short .accordion-button:hover {
    background-color: #d2d2d57d;
}

.grid-short .accordion-button span {
    margin-right: 8px;
    font-size: 15px;
    color: var(--mainColor);
    transition: var(--transition);
}

.grid-short .accordion-body {
    position: absolute;
    background-color: var(--whiteColor);
    z-index: 1;
    width: 100%;
    border: 1px solid var(--borderColor);
    padding: 0;
}

.grid-short .accordion-body li a {
    display: block;
    padding: 5px 10px;
    border-bottom: 1px solid var(--borderColor);
}

.grid-short .accordion-body li a:hover {
    color: var(--whiteColor);
    background-color: var(--primaryColor);
}

.grid-short .accordion-button::after {
    background-image: url(../img/icon/down-arrow.png);
    transform: rotate(0deg);
}

.single-course-image .course-catgy {
    position: absolute;
    content: '';
    display: inline-block;
    padding: 6px 23px;
    background-color: var(--primaryColor);
    color: var(--whiteColor);
    font-weight: 600;
    top: 30px;
    left: 30px;
    border-radius: 30px;
}

.single-course-content h2 {
    line-height: 32px;
}

.user-details {
    padding: 30px 0px 20px;
}

.user-details .info-item {
    margin-right: 15px;
}

.user-details .info-item img {
    margin-right: 10px;
}

.user-details .info-item p a {
    font-weight: 600;
    color: var(--mainColor);
}

.user-details .info-item p span {
    color: var(--secondaryColor);
    margin-right: 5px;
}

.user-details .info-item ul li i {
    color: var(--secondaryColor);
}

.user-details .info-item ul span {
    margin-left: 5px;
}

.course-tab {
    border: 1px solid var(--borderColor);
    list-style: none;
    padding: 20px;
    border-radius: 10px;
}

.course-tab .nav-link {
    color: var(--mainColor);
    padding: 15px 20px;
    border-radius: 30px;
    background-color: var(--offWhiteColor);
    margin-right: 12px;
    font-weight: 600;
    font-size: 16px;
    transition: var(--transition);
}

.course-tab .nav-link img {
    position: relative;
    top: -2px;
    margin-right: 5px;
}

.course-tab .nav-link.active {
    color: var(--whiteColor);
    background: var(--primaryColor);
    box-shadow: 0px 6px 30px 0px #573BFF4D;
}

.course-tab .nav-link.active img {
    filter: brightness(0) invert(1);
}

.course-tab .nav-link:hover {
    color: var(--whiteColor);
    background: var(--primaryColor);
    box-shadow: 0px 6px 30px 0px #573BFF4D;
}

.course-tab .nav-link:hover img {
    filter: brightness(0) invert(1);
}

.course-single-otp {
    margin-bottom: 20px;
}

.course-single-otp .icon {
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 25px;
    background-color: var(--primaryColor);
    color: var(--whiteColor);
    margin-right: 20px;
    border-radius: 30px;
}

.course-single-otp p {
    font-weight: 600;
    color: var(--mainColor);
    margin-bottom: 0;
}

.instructor-content {
    padding-left: 20px;
}

.instructor-content .meta-info {
    margin-bottom: 15px;
}

.instructor-content .meta-info li {
    margin-right: 5px;
}

.instructor-content .meta-info li i {
    color: var(--secondaryColor);
}

.instructor-content .instructor-info ul {
    margin-bottom: 15px;
}

.instructor-content .instructor-info ul li {
    margin-right: 20px;
    color: var(--mainColor);
}

.instructor-content .instructor-info ul li:last-child {
    margin-right: 0px;
}

.instructor-content .instructor-info span {
    margin-right: 5px;
}

.instructor-content .instructor-info ul li {
    margin-right: 8px;
    font-size: 12px;
}

.instructor-content .instructor-info span {
    margin-right: 2px;
}

.single-course-image .course-catgy {
    padding: 4px 12px;
    font-weight: 600;
    top: 17px;
    font-size: 14px;
    left: 12px;
}

.single-course-sidebar .course-widget .sidebar-content .courses-details h4 {
    font-size: 18px;
}

.course-single-otp .icon {
    height: 30px;
    width: 30px;
    line-height: 30px;
    font-size: 20px;
    margin-right: 15px;
}

.single-course-sidebar .course-widget h3 {
    font-size: 30px !important;
}

.single-course-sidebar .course-widget .share img {
    width: 30px;
}

.single-course-sidebar .course-widget {
    padding: 30px 12px !important;
}

.single-meet-card {
    margin-bottom: 25px;
}

.single-meet-card .image {
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 10px 30px 0;
    position: relative;
    transition: var(--transition);
    border: 1px solid var(--primaryColor);
    background-color: rgba(246, 246, 246, 1);
}

.single-meet-card .image::before {
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    content: '';
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    border-radius: 11px;
    transition: var(--transition);
    background: linear-gradient(90deg, #573BFF 0%, rgba(255, 138, 122, 0.97) 100%);
}

.single-meet-card:hover .image::before {
    opacity: 1;
    visibility: visible;
}

.single-meet-card:hover .image {
    border-color: rgba(198, 201, 212, 1)
}

.single-meet-card .content {
    padding-right: 15px;
}

.single-meet-card .content .text h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.single-meet-card .content .icon .btn {
    padding: 0;
    width: 60px;
    height: 60px;
    font-size: 25px;
    line-height: 60px;
    border-radius: 100%;
}

.single-meet-card .social-icon {
    right: 15px;
    bottom: 70px;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    transition: var(--transition);
}

.single-meet-card .social-icon ul li {
    margin-bottom: 10px;
}

.single-meet-card .social-icon ul li a {
    width: 60px;
    height: 60px;
    font-size: 25px;
    line-height: 60px;
    border-radius: 100%;
    display: inline-block;
    text-align: center;
    color: var(--mainColor);
    transition: var(--transition);
    background-color: var(--whiteColor);
    box-shadow: 0px 5px 30px 0px rgba(0, 1, 17, 0.05);
}

.single-meet-card .social-icon ul li a:hover {
    color: var(--whiteColor);
    background: linear-gradient(90deg, #573BFF 0%, rgba(255, 138, 122, 0.97) 100%);
}

.single-meet-card .content .icon:hover .social-icon {
    opacity: 1;
    visibility: visible;
}

.single-provides-info {
    padding: 30px;
    border-radius: 5px;
    margin-bottom: 25px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(../img/all-img/single-provides-info.jpg);
}

.single-provides-info::before {
    left: 0;
    top: 0;
    content: '';
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 80%;
    border-radius: 5px;
    position: absolute;
    background-color: var(--mainColor);
}

.single-provides-info span {
    padding: 8px 20px;
    font-weight: 600;
    border-radius: 5px;
    margin-bottom: 20px;
    display: inline-block;
    color: var(--primaryColor);
    background-color: var(--whiteColor);
}

.single-provides-info h3 {
    font-size: 20px;
    max-width: 384px;
    line-height: 1.5;
    margin-bottom: 20px;
    color: var(--whiteColor);
}

.single-provides-info p {
    max-width: 384px;
    color: rgba(255, 255, 255, 1);
}

.single-events-card {
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 25px;
    transition: var(--transition);
    background-color: var(--whiteColor);
    border: 1px solid var(--primaryColor);
}

.single-events-card .image {
    margin-bottom: 20px;
}

.single-events-card h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.single-events-card ul li {
    padding-left: 20px;
    position: relative;
    margin-right: 10px;
}

.single-events-card ul li:last-child {
    margin-right: 0;
}

.single-events-card ul li i {
    left: 0;
    top: 0;
    position: absolute;
}

.single-events-card .btn {
    top: 50%;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    max-width: 149px;
    text-align: center;
    position: absolute;
    visibility: hidden;
    transform: translateY(-50%);
    display: inline-block !important;
}

.single-events-card:hover .btn {
    opacity: 1;
    visibility: visible;
}

.single-events-card:hover::before {
    opacity: 1;
    visibility: visible;
}

.single-events-card:hover {
    border-color: rgba(198, 201, 212, 1);
}

.single-events-card::before {
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    content: '';
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    border-radius: 11px;
    transition: var(--transition);
    background: linear-gradient(90deg, #573BFF 0%, rgba(255, 138, 122, 0.97) 100%);
}

.single-testimonial-info {
    padding: 20px;
    margin-bottom: 5px;
    border-radius: 10px;
    display: inline-block;
    transition: var(--transition);
    background-color: var(--whiteColor);
    border: 1px solid var(--primaryColor);
}

.single-testimonial-info::before {
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    content: '';
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    border-radius: 11px;
    transition: var(--transition);
    background: linear-gradient(90deg, #573BFF 0%, rgba(255, 138, 122, 0.97) 100%);
}

.single-testimonial-info:hover::before {
    opacity: 1;
    visibility: visible;
}

.single-testimonial-info:hover {
    border-color: rgba(198, 201, 212, 1);
}

.single-testimonial-info .image {
    margin-bottom: 15px;
}

.single-testimonial-info .image img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
}

.single-testimonial-info h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.single-testimonial-info .cap-icon {
    top: 30px;
    right: 118px;
    position: absolute;
}

.single-testimonial-info .quote-icon {
    right: 35px;
    bottom: 35px;
    font-size: 40px;
    position: absolute;
    transition: var(--transition);
    color: rgba(246, 246, 246, 1);
}

.single-testimonial-info:hover .quote-icon {
    color: var(--primaryColor);
}

.lession-total-review {
    padding: 40px 0;
    text-align: center;
    box-shadow: 0px 5px 30px 0px #0001110D;
}

.lession-total-review h3 {
    font-size: 35px;
    font-weight: 600;
}

.rating-stars li i {
    color: var(--secondaryColor);
}

.rating-stars li {
    margin-right: 2px;
    display: inline-block;
}

.progress-bar {
    width: 0;
    animation: progress 1.5s ease-in-out forwards;
    background-color: var(--secondaryColor);
}

.progress {
    display: flex;
    height: 5px;
    background-color: var(--offWhiteColor);
}

.lesseon-review-section .lession-review-items .ratings-text span {
    margin-right: 15px;
    color: var(--mainColor);
}

.lesseon-review-section .lession-review-items ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-right: 10px;
}

.lession-review-items .progress-section {
    margin-bottom: 0;
    margin-right: 18px;
}

.lession-review-items .progress {
    height: 5px;
    background-color: var(--offWhiteColor);
    width: 300px;
}

.progress-bar-items .progress-title span {
    font-size: 18px;
    font-weight: 500;
    color: var(--secondaryColor);
}

.progress-bar-items .progress-title {
    padding: 0 20px;
}

@keyframes progress {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}

@keyframes show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.student-review-section form .student-rating {
    text-align: left;
    overflow: hidden;
    max-width: 115px;
    margin-top: -5px;
    margin-bottom: 20px;
}

.student-review-section form .form-group {
    margin-bottom: 25px;
    text-align: left;
}

.student-review-section form .student-rating label {
    float: right;
    position: relative;
    width: 23px;
    height: 23px;
    cursor: pointer;
}

.student-review-section form .student-rating label:not(:first-of-type) {
    padding-right: 5px;
}

.student-review-section form .student-rating label:before {
    content: "\2605";
    -webkit-transition: var(--transition);
    transition: var(--transition);
    font-size: 27px;
    color: #CCCCCC;
    line-height: 1;
}

.student-review-section form .student-rating input {
    display: none;
}

.student-review-section form .student-rating input:checked~label:before,
.student-review-section form .rating:not(:checked)>label:hover:before,
.student-review-section form .rating:not(:checked)>label:hover~label:before {
    color: #ffbc1f;
}

.carriculum-box .accordion {
    padding: 10px;
}

.carriculum-box .accordion-body {
    padding: 20px 0 0;
}

.carriculum-content {
    padding: 10px;
    border: 1px solid var(--borderColor);
    border-radius: 10px;
}

.carriculum-btn {
    padding: 0;
    color: var(--mainColor);
    font-weight: 600;
    font-size: 16px;
}

.carriculum-btn:focus {
    box-shadow: none;
    border: none;
}

.carriculum-btn:not(.collapsed) {
    box-shadow: none;
    background-color: transparent;
    color: var(--mainColor);
}

.carriculum-box {
    border: none;
    padding: 5px;
    width: 100%;
    height: 420px;
    overflow-y: scroll;
}

.carriculum-box::-webkit-scrollbar {
    width: 12px;
    height: 12px;
}

.carriculum-box::-webkit-scrollbar-track {
    background-color: var(--offWhiteColor);
}

.carriculum-box::-webkit-scrollbar-thumb {
    background: var(--primaryColor);
    border-radius: 10px;
}

.carriculum-box::-webkit-scrollbar-thumb:hover {
    background: var(--primaryColor);
}

.meta-progress {
    margin-bottom: 20px;
}

.meta-progress .p-header {
    margin-bottom: 10px;
}

.meta-progress .p-header p {
    margin-bottom: 0;
    color: var(--mainColor);
}

.meta-progress .p-header p {
    margin-bottom: 0;
    color: var(--mainColor);
}

.meta-progress .progress-section {
    margin-bottom: 0;
}

.meta-progress .progress {
    height: 5px;
    background-color: var(--offWhiteColor);
    width: 100%;
}

.meta-progress .progress-bar {
    width: 0;
    animation: progress 1.5s ease-in-out forwards;
    background-color: var(--primaryColor);
}

.carriculum-item {
    margin-bottom: 20px;
}

.carriculum-item:last-child {
    margin-bottom: 0px;
}

.course-into .icon {
    margin-right: 10px;
    font-size: 20px;
    color: var(--mainColor);
    height: 40px;
    width: 40px;
    line-height: 40px;
    text-align: center;
    background-color: var(--offWhiteColor);
    border-radius: 30px;
}

a.course-set {
    margin-bottom: 20px;
}

a.course-set:last-child {
    margin-bottom: 0px;
    border-bottom: 1px solid var(--borderColor);
    padding-bottom: 25px;
}

.course-into span {
    font-size: 15px;
    color: var(--mainColor);
}

.course-time span {
    font-size: 15px;
    color: var(--mainColor);
    background-color: var(--offWhiteColor);
    padding: 5px 20px;
    margin-right: 15px;
    border-radius: 5px;
}

.single-course-sidebar .course-widget {
    border: 1px solid var(--borderColor);
    padding: 30px 20px;
    border-radius: 10px;
}

.single-course-sidebar .course-widget .course-video a img {
    width: 100%;
}

.course-video .play-now .ripple,
.play-now .ripple:before,
.play-now .ripple:after {
    height: 60px;
    width: 60px;
}

.single-course-sidebar .course-widget .course-video {
    position: relative;
    background-image: url(../img/all-img/course-promo.png);
    background-size: cover;
    background-repeat: no-repeat;
    padding: 60px 0;
}

.single-course-sidebar .course-widget .course-video .cr-video-btn {
    position: absolute;
    content: '';
    top: 25px;
    display: inline-table;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 30px;
    color: var(--mainColor);
    height: 60px;
    width: 60px;
    line-height: 60px;
    text-align: center;
    background-color: var(--whiteColor);
    border-radius: 42px;
}

.single-course-sidebar .course-widget .course-video {
    margin-bottom: 20px;
}

.single-course-sidebar .course-widget h3 {
    font-size: 35px;
}

.single-course-sidebar .course-widget .style-one {
    display: inherit;
    text-align: center;
}

.single-course-sidebar .course-widget .sidebar-content .courses-details {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 30px;
}

.single-course-sidebar .course-widget .sidebar-content .courses-details li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

.single-course-sidebar .course-widget .sidebar-content .courses-details li p {
    margin-bottom: 0px;
}

.single-course-sidebar .course-widget .sidebar-content .courses-details li:last-child {
    border-bottom: none;
    padding-bottom: 0px;
    margin-bottom: 0;
}

.single-course-sidebar .course-widget .sidebar-content .courses-details li .icon img {
    margin-right: 5px;
}

.single-course-sidebar .course-widget .sidebar-content .course-shared {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
}

.sidebar-content .btn.dec-clor {
    background-color: var(--offWhiteColor);
    color: var(--mainColor);
}

.sidebar-content .btn.dec-clor img {
    filter: brightness(0) invert(0);
}

.sidebar-content .btn.dec-clor:hover {
    color: var(--whiteColor);
}

.sidebar-content .btn.dec-clor:hover img {
    filter: brightness(0) invert(1);
}
</style>