<script setup>

import { useRoute } from 'vue-router';
import { onMounted , ref } from 'vue';
import { useInscriptions } from "../stores/counter";

const Users = useInscriptions();

const users = ref([]);
const id = useRoute().path.slice(26);

onMounted(async () => {
    await Users.getUsersByFormation(id);
    users.value = Users.usersOfFormation;
    console.log(users)
});

</script>


<template>
    <!-- Instructor Section Start -->
    <div class="instructor-section ptb-100">
        <div class="container">
            <div class="main-max-width">
                <div class="edu-grid-sorting style-one">
                    <div class="fitter-option filter-fixe justify-content-between d-flex align-items-center">
                        <p class="mb-0 mr-20">Showing 1-6 of 54 results</p>
                        <div class="fit-options d-flex">
                            <div class="search-filtter">
                                <form class="search-form position-relative">
                                    <label>
                                            <input type="search" class="search-field" placeholder="Search...">
                                        </label>
                                    <button class="search-btn" type="submit"><i class="ri-search-line"></i></button>
                                </form>
                            </div>
                            <div class="accordion grid-short" id="grid-short-one">
                                <div class="accordion-item position-relative">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#gridShortOne">
                                            <span>Category</span>  
                                            </button>
                                    </h2>
                                    <div id="gridShortOne" class="accordion-collapse collapse" data-bs-parent="#grid-short">
                                        <div class="accordion-body">
                                            <ul class="list-unstyle p-0">
                                                <li><a href="#">Popular</a></li>
                                                <li><a href="#">Creative</a></li>
                                                <li><a href="#">Design</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion grid-short" id="grid-short-tow">
                                <div class="accordion-item position-relative">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#gridShortSaven">
                                            <span>Sort By: Most Popular</span>  
                                            </button>
                                    </h2>
                                    <div id="gridShortSaven" class="accordion-collapse collapse" data-bs-parent="#grid-short">
                                        <div class="accordion-body">
                                            <ul class="list-unstyle p-0">
                                                <li><a href="#">Popular</a></li>
                                                <li><a href="#">Creative</a></li>
                                                <li><a href="#">Design</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div v-for="user in users" :key="user.id" class="col-lg-4 col-md-6">
                        <div class="single-instructor-box style-one box-shadow-2 mb-30">
                            <div class="content">
                                <div class="details-info d-flex justify-content-between">
                                    <div class="text">
                                        <h3 class="fs-16">{{ user.name }}</h3>
                                        <p>{{ user.email }}</p>
                                    </div>
                                    <div class="reat">
                                        <a :href="`mailto:${user.email}`">                                            <i class="fa-solid fa-paper-plane"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="meta-info d-flex align-items-center">
                                    <div class="item">
                                        <img src="/assets/img/icon/short-play.svg" alt="image"> ({{ user.inscriptions_count }}) Course
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- Pagination -->
                <ul class="page-nav list-style text-start p-0 mt-40">
                    <li><a href="courses.html"><img src="./assets/img/icon/long-arrow.svg" alt="icon"></a></li>
                    <li><a class="active" href="courses.html">01</a></li>
                    <li><a href="courses.html">02</a></li>
                    <li><a href="courses.html">03</a></li>
                    <li><a href="courses.html">04</a></li>
                    <li><a href="courses.html"><img src="./assets/img/icon/long-arrow.svg" alt="icon"></a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Instructor Section End -->
</template>

<style scoped>


.details-profile .title-text {
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--borderColor);
    margin-bottom: 20px;
}

.single-instructor-box.style-one {
    border-radius: 10px;
}

.single-instructor-box.style-one:hover .image ul {
    opacity: 1;
    right: 5%;
}

.single-instructor-box.style-one .image {
    position: relative;
}

.single-instructor-box.style-one ul {
    position: absolute;
    bottom: 4%;
    right: 0%;
    transition: var(--transition);
    opacity: 0;
}

.single-instructor-box .social-profile li a {
    height: 35px;
    display: inline-block;
    width: 35px;
    border-radius: 5px;
    background-color: var(--mainColor);
    color: var(--whiteColor);
    text-align: center;
    line-height: 35px;
    margin-bottom: 15px;
}

.single-instructor-box .social-profile li a:hover {
    background-color: var(--primaryColor);
    color: var(--whiteColor);
}

.single-instructor-box .details-info {
    border-bottom: 1px solid var(--borderColor);
    margin-bottom: 10px;
}

.single-instructor-box.style-one .content {
    border: none;
}

.single-instructor-box .content {
    padding: 20px 20px;
    border-left: 1px solid var(--borderColor);
    border-right: 1px solid var(--borderColor);
    border-bottom: 1px solid var(--borderColor);
}

.single-instructor-box .content .text h3 {
    margin-bottom: 5px;
}

.single-instructor-box .content .text p {
    margin-bottom: 10px;
}

.single-instructor-box .content .reat i {
    color: var(--secondaryColor);
}

.single-instructor-box .meta-info .item {
    margin-right: 20px;
}

.single-instructor-box .meta-info .item:last-child {
    margin-right: 0px;
}

.single-instructor-box .meta-info .item img {
    margin-right: 10px;
    position: relative;
    top: -2px;
}

.edu-skills ul.info {
    margin-bottom: 30px;
}

.edu-skills ul.info li {
    padding: 10px 20px;
    background-color: var(--offWhiteColor);
    margin-bottom: 15px;
    border-radius: 30px;
}

.edu-skills ul.info li:last-child {
    margin-bottom: 0px;
}

.edu-skills ul.info li span {
    margin-right: 10px;
}

.edu-skills .social-profile li {
    display: inline-block;
    margin-right: 10px;
}

.edu-skills .social-profile li a {
    height: 40px;
    width: 40px;
    border-radius: 30px;
    text-align: center;
    line-height: 40px;
    background-color: var(--mainColor);
    display: block;
    color: var(--whiteColor);
}

.profile-scores {
    background-image: url(../img/banner/counter-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    padding: 30px 0px;
    border-radius: 10px;
    position: relative;
}

.profile-scores::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #012935CC;
    border-radius: 10px;
}

.profile-scores .item-score {
    position: relative;
    z-index: 2;
    text-align: center;
}

.profile-scores .item-score h2 {
    font-size: 50px;
    color: var(--whiteColor);
    display: inline-flex;
}

.profile-scores .item-score p {
    color: var(--whiteColor);
    margin-bottom: 0;
}

.skills-bar {
    padding: 30px;
    box-shadow: 0px 5px 30px 0px #0001110D;
}

.skill-progress .progress {
    height: 10px;
    border-radius: 10px;
}

.skill-progress .progress-section {
    margin-bottom: 20px;
}

.skill-progress .progress-section:last-child {
    margin-bottom: 0px;
}

.skill-progress .meta-info p {
    font-weight: 600;
    color: var(--mainColor);
}

.fit-options .search-filtter {
    margin-right: 15px;
}

.fit-options form .search-field {
    height: 50px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 60px;
    padding: 2px 0 0 50px;
    background-color: var(--offWhiteColor);
    -webkit-transition: var(--transition);
    transition: var(--transition);
    font-weight: 400;
}

.fit-options form .search-btn {
    top: 4px;
    left: 17px;
    padding: 0;
    border: none;
    border-radius: 4px;
    font-size: 22px;
    line-height: 44px;
    position: absolute;
    color: var(--paraColor);
    -webkit-transition: var(--transition);
    transition: var(--transition);
    background-color: transparent;
}

/* ====================
  Video Section
=====================*/

.video-section {
    background-image: url(../img/banner/video-area.png);
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    padding: 300px 0px;
}

.icon-yl-clr {
    background-color: #FFBC1F;
    box-shadow: 0px 5px 30px 0px #FFBC1F4D;
}

.icon-rd-clr {
    background-color: #FF7E84;
    box-shadow: 0px 5px 30px 0px #FF7E844D;
}

.icon-gr-clr {
    background-color: #30BEAD;
    box-shadow: 0px 5px 30px 0px #30BEAD4D;
}

.icon-pr-clr {
    background-color: #8861DB;
    box-shadow: 0px 5px 30px 0px #8861DB;
}

.counter-box {
    background-color: var(--whiteColor);
    -webkit-box-shadow: 0px 5px 30px 0px #0001110D;
    box-shadow: 0px 5px 30px 0px #0001110D;
    text-align: center;
    position: relative;
    padding: 90px 30px 40px;
    margin-bottom: 30px;
    border-radius: 30px;
}

.counter-box .icon {
    height: 80px;
    width: 80px;
    position: absolute;
    content: '';
    top: -30px;
    left: 0;
    right: 0;
    margin: auto;
    line-height: 80px;
    border-radius: 80px;
}

.counter-box .count {
    font-size: 50px;
    font-weight: 600;
    color: var(--mainColor);
    margin-bottom: 20px;
}

.counter-box .counter p {
    font-size: 15px;
}

.score-area {
    position: relative;
    top: -75px;
}

.single-blog-box {
    box-shadow: 0px 5px 30px 0px #0001110D;
    border-radius: 10px;
    margin-bottom: 25px;
}

.single-blog-box .cr-tag a {
    position: absolute;
    top: 25px;
    left: 15px;
    padding: 6px 15px;
    border-radius: 30px;
    font-size: 16px;
    background-color: var(--whiteColor);
    color: var(--mainColor);
    font-weight: 600;
}

.single-blog-box .cr-tag a:hover {
    background-color: var(--primaryColor);
    color: var(--whiteColor);
}

.single-blog-box .content {
    padding: 45px 20px 15px;
}

.single-blog-box .content .list-unstyle {
    margin-bottom: 10px;
}

.single-blog-box .content .list-unstyle li i {
    margin-right: 5px;
}

.single-blog-box .author a {
    display: inline-block;
    padding: 6px 12px;
    position: absolute;
    bottom: -22px;
    right: 20px;
    background-color: var(--whiteColor);
    box-shadow: 3px 3px 0 1px var(--primaryColor);
    border-radius: 30px;
}

.single-blog-box.style-2 .content .author {
    margin-bottom: 20px;
    padding: 6px 12px;
    display: inline-block;
    background-color: var(--whiteColor);
    box-shadow: 3px 3px 0 1px var(--primaryColor);
    border-radius: 30px;
    transition: var(--transition);
}

.single-blog-box.style-2 .content .author:hover {
    color: var(--whiteColor);
    background-color: var(--primaryColor);
    box-shadow: 0px 6px 30px 0px #573BFF4D;
}

.single-blog-box.style-2 .content .author:hover span {
    color: var(--whiteColor);
}

.single-blog-box.style-2 .content {
    padding: 25px 0 0px;
}

.single-blog-box .author span {
    font-size: 16px;
    font-weight: 600;
    color: var(--mainColor);
    margin-left: 5px;
}

.single-blog-content h2 {
    font-size: 35px;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 20px;
}

.single-blog-content .btn {
    margin-top: 10px;
}

.single-blog-card {
    padding: 20px;
    margin-bottom: 25px;
    border-radius: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(../img/all-img/single-blog-card-1.jpg);
}

.single-blog-card::after {
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 10px;
    position: absolute;
    background-color: rgba(0, 4, 44, 0.5);
}

.single-blog-card .date {
    width: 80px;
    height: 80px;
    padding: 16px;
    padding-top: 14px;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 90px;
    display: inline-block;
    transition: var(--transition);
    background-color: var(--mainColor);
}

.single-blog-card .date span {
    font-weight: 600;
    line-height: 1;
    color: var(--whiteColor);
}

.single-blog-card h3 {
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 12px;
}

.single-blog-card h3 a {
    color: var(--whiteColor);
}

.single-blog-card h3 a:hover {
    color: var(--secondaryColor);
}

.single-blog-card p {
    color: rgba(255, 255, 255, 1);
}

.single-blog-card .cr-items {
    padding-top: 20px;
    border-top: 1px solid rgba(198, 201, 212, 1);
}

.single-blog-card .cr-items li {
    margin-right: 40px;
}

.single-blog-card .cr-items li:last-child {
    margin-right: 0;
}

.single-blog-card .cr-items li .btn {
    border-radius: 5px;
    padding: 9px 22px;
    color: var(--mainColor);
    background-color: rgba(246, 246, 246, 1);
}

.single-blog-card .cr-items li span {
    color: rgba(255, 255, 255, 1);
}

.single-blog-card:hover .date {
    background-color: var(--secondaryColor);
}

.single-blog-card:hover .cr-items li .btn {
    color: var(--whiteColor);
}

.single-blog-card:hover .cr-items li .btn:before {
    width: 120%;
    visibility: visible;
    opacity: 1;
}

.single-blog-card.style-3 {
    background-image: unset;
    transition: var(--transition);
    border: 1px solid var(--primaryColor);
    background-color: rgba(255, 255, 255, 1);
}

.single-blog-card.style-3::after {
    opacity: 0;
    visibility: hidden;
}

.single-blog-card.style-3 p {
    color: var(--paraColor);
}

.single-blog-card.style-3 h3 {
    line-height: 1.5;
}

.single-blog-card.style-3 h3 a {
    color: var(--mainColor);
}

.single-blog-card.style-3 .date {
    margin-bottom: 30px;
    transition: var(--transition);
    background-color: rgba(246, 246, 246, 1);
}

.single-blog-card.style-3 .date span {
    color: var(--mainColor);
    transition: var(--transition);
}

.single-blog-card.style-3:hover .date {
    background: linear-gradient(90deg, #573BFF 0%, rgba(255, 138, 122, 0.97) 100%);
}

.single-blog-card.style-3:hover .date span {
    color: var(--whiteColor);
}

.single-blog-card.style-3 .cr-items li .btn::before {
    background: linear-gradient(90deg, #573BFF 0%, rgba(255, 138, 122, 0.97) 100%);
}

.single-blog-card.style-3 .user-list {
    margin-bottom: 20px;
}

.single-blog-card.style-3 .user-list li {
    margin-right: 10px;
    padding-left: 25px;
    position: relative;
}

.single-blog-card.style-3 .user-list li:last-child {
    margin-right: 0;
}

.single-blog-card.style-3 .user-list li i {
    top: 0;
    left: 0;
    font-size: 20px;
    position: absolute;
}

.single-blog-card.style-3::before {
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

.single-blog-card.style-3:hover::before {
    opacity: 1;
    visibility: visible;
}

.single-blog-card.style-3:hover {
    border-color: rgba(198, 201, 212, 1);
}

ul.page-nav {
    padding: 0;
    text-align: center !important;
}

.page-nav li {
    margin: 0 4px;
    display: inline-block;
}

.page-nav li a {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 30px;
    line-height: 35px;
    text-align: center;
    color: var(--paraColor);
    background-color: var(--whiteColor);
    transition: var(--transition);
    border: 1px solid var(--borderColor);
}

.page-nav li a i {
    font-size: 25px;
    font-weight: 300;
    line-height: 0.8;
    margin: 0 auto;
    transition: var(--transition);
}
.page-nav li a img {
    transition: var(--transition);
}

.page-nav li a:hover img {
    filter: brightness(0) invert(1);
}

.page-nav li a.active,
.page-nav li a:hover {
    opacity: 1;
    background-color: var(--primaryColor);
    border-color: transparent;
    color: var(--whiteColor);
}

.page-nav li:first-child,
.page-nav li:last-child {
    position: relative;
    top: 2px;
}

.page-nav li:first-child {
    transform: rotate(180deg);
}

</style>