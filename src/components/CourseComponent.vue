<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useFomations, useInscriptions, useAuthStore } from '../stores/counter';

const Fomation = useFomations();
const authStore = useAuthStore();
const Inscription = useInscriptions();
const formation = ref(null);
const CountOfFormations = ref(null);
const userWithInfo = ref(null);
const successModal = ref(false);

const form = ref({
    participant_id: null,
    formation_id: null,
    status: 'pending',
    payment_proof: '',
    justification: ''
    });

    const route = useRoute();
    const id = route.path.slice(9);

    onMounted(async () => {
    try {
        await authStore.getUser();
        await Fomation.fetchFormationById(id);
        formation.value = Fomation.formations;
        await Fomation.fetchFormationsByProfessor(formation.value.professor.id);
        CountOfFormations.value = Fomation.formations.length;
        await authStore.getUserWithInfo(authStore.user.role, authStore.user.id);
        userWithInfo.value = authStore.userWithInfo;

        form.value.participant_id = userWithInfo.value?.participant_info?.id || null;
        form.value.formation_id = formation.value.id;
    } catch (error) {
        console.error('Error during setup:', error);
    }
    });

    const submitForm = async () => {
    try {
        await Inscription.inscription(form.value);
        successModal.value = true;
    } catch (error) {
        console.error('Error during form submission:', error);
    }
};
</script>


<template>
    <div v-if="formation" class="courses-details-section ptb-100">
        <div class="container">
            <div class="main-max-width">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-course-desc">
                            <div class="single-course-image position-relative">
                                <img src="./assets/img/all-img/course-details.png" alt="image">
                                <a class="course-catgy">{{ formation.centre.name.toUpperCase() }}</a>
                            </div>
                            <div class="single-course-content">
                                <div class="user-details d-flex align-items-center">
                                    <div class="info-item d-flex align-items-center">
                                        <img src="./assets/img/all-img/user-3.png" alt="image">
                                        <p class="mb-0"><a href="team-details.html">{{ formation.professor_name.toUpperCase() }}</a></p>
                                    </div>
                                    <div class="info-item d-flex align-items-center">
                                        <p class="mb-0"><span><i class="ri-vidicon-fill"></i></span> Salle : {{ formation.salle.id }}</p>
                                    </div>
                                    <div class="info-item d-flex align-items-center">
                                        <p class="mb-0"><span><i class="ri-time-line"></i></span> {{ formation.start_date.split(' ')[0] }}  =>  {{ formation.end_date.split(' ')[0] }}</p>
                                    </div>
                                    <div class="info-item d-flex align-items-center">
                                        <ul class="list-unstyle d-flex">
                                            <li><i class="ri-star-fill"></i></li>
                                            <li><i class="ri-star-fill"></i></li>
                                            <li><i class="ri-star-fill"></i></li>
                                            <li><i class="ri-star-fill"></i></li>
                                            <li><i class="ri-star-half-line"></i></li>
                                            <li><span>(4.9)</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <h2 class="fs-20 mb-20">Elevate your skills in 2024 with our Web Design and Graphic Learning Bootcamp where creativity meets cutting-edge technology.</h2>
                            </div>

                            <div class="course-details-wapper">
                                <ul class="nav course-tab mb-30" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#course-overview" type="button" role="tab" aria-selected="true"><img src="./assets/img/icon/over-view-icon.svg" alt="icon"> Overview</button>
                                    </li>

                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#course-carri" type="button" role="tab" aria-selected="false" tabindex="-1"><img src="./assets/img/icon/book-icon.svg" alt="icon"> Carriculum</button>
                                    </li>

                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#course-inst" type="button" role="tab" aria-selected="false" tabindex="-1"><img src="./assets/img/icon/star-icon.svg" alt="icon"> Reviews</button>
                                    </li>

                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#course-reviews" type="button" role="tab" aria-selected="false" tabindex="-1"><img src="./assets/img/icon/user-icon.svg" alt="icon"> Instructor</button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="course-tabContent">
                                    <!-- overview Tab -->
                                    <div class="tab-pane fade show active" id="course-overview" role="tabpanel">
                                        <div class="overview-content mb-30">
                                            <h3 class="fs-20 fs-medium mb-40">Description</h3>
                                            <p class="mb-30">{{ formation.description }}</p>
                                        </div>
                                        <div class="overview-otp mb-30">
                                            <h3 class="fs-20 fs-medium mb-40">What You will Learn?</h3>
                                            <p class="mb-30">Embark on a transformative learning journey and gain a wealth of knowledge and skills that will empower you both personally and professionally.</p>
                                            <div class="row">
                                                <div class="col-lg-6 col-md-12 col-sm-12">
                                                    <div class="course-single-otp d-flex align-items-center">
                                                        <div class="icon">
                                                            <i class="ri-check-line"></i>
                                                        </div>
                                                        <p>Master Key Concepts</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-sm-12">
                                                    <div class="course-single-otp d-flex align-items-center ">
                                                        <div class="icon">
                                                            <i class="ri-check-line"></i>
                                                        </div>
                                                        <p>Practical Application</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-sm-12">
                                                    <div class="course-single-otp d-flex align-items-center">
                                                        <div class="icon">
                                                            <i class="ri-check-line"></i>
                                                        </div>
                                                        <p>Critical Thinking and Problem-Solving</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-sm-12">
                                                    <div class="course-single-otp d-flex align-items-center">
                                                        <div class="icon">
                                                            <i class="ri-check-line"></i>
                                                        </div>
                                                        <p>Industry-Relevant Insights</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-sm-12">
                                                    <div class="course-single-otp d-flex align-items-center">
                                                        <div class="icon">
                                                            <i class="ri-check-line"></i>
                                                        </div>
                                                        <p>Collaboration and Teamwork</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-sm-12">
                                                    <div class="course-single-otp d-flex align-items-center">
                                                        <div class="icon">
                                                            <i class="ri-check-line"></i>
                                                        </div>
                                                        <p>Continuous Learning Strategies</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Carriculum Tab -->
                                    <div class="tab-pane fade" id="course-carri" role="tabpanel">
                                        <div class="carriculum" id="carriculumExample">
                                            <div class="carriculum-content">
                                                <div class="carriculum-box">
                                                    <div class="accordion" id="carriculumExp">
                                                        <div class="carriculum-item">
                                                            <div class="accordion-header">
                                                                <button class="accordion-button carriculum-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                                                    What is Search Engine Optimization (SEQ)
                                                                </button>
                                                                <p class="mb-0">(03 Lectures)</p>
                                                            </div>
                                                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#carriculumExp">
                                                                <div class="accordion-body">
                                                                    <div class="meta-progress">
                                                                        <div class="p-header d-flex justify-content-between">
                                                                            <p>1/3 Completed</p>
                                                                            <p>65%</p>
                                                                        </div>
                                                                        <div class="progress-section">
                                                                            <div class="progress">
                                                                                <div class="progress-bar" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="67" style="max-width: 67%">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <a class="course-set d-flex justify-content-between" href="#">
                                                                        <div class="course-into d-flex align-items-center">
                                                                            <div class="icon">
                                                                                <i class="ri-play-fill cr-video-btn"></i>
                                                                            </div>
                                                                            <span>Introduction</span>
                                                                        </div>
                                                                        <div class="course-time d-flex align-items-center">
                                                                            <span>3m 25s</span>
                                                                            <div class="icon">
                                                                                <img src="./assets/img/icon/lock-icon.svg" alt="icon">
                                                                            </div>
                                                                        </div>
                                                                    </a>

                                                                    <a class="course-set d-flex justify-content-between" href="#">
                                                                        <div class="course-into d-flex align-items-center">
                                                                            <div class="icon">
                                                                                <i class="ri-play-fill cr-video-btn"></i>
                                                                            </div>
                                                                            <span>Type of Digital Marketing</span>
                                                                        </div>
                                                                        <div class="course-time d-flex align-items-center">
                                                                            <span>3m 25s</span>
                                                                            <div class="icon">
                                                                                <img src="./assets/img/icon/lock-icon.svg" alt="icon">
                                                                            </div>
                                                                        </div>
                                                                    </a>

                                                                    <a class="course-set d-flex justify-content-between" href="#">
                                                                        <div class="course-into d-flex align-items-center">
                                                                            <div class="icon">
                                                                                <i class="ri-play-fill cr-video-btn"></i>
                                                                            </div>
                                                                            <span>It’s Not an income Problem. it’s a Thinking Problem</span>
                                                                        </div>
                                                                        <div class="course-time d-flex align-items-center">
                                                                            <span>Preview</span>
                                                                            <div class="icon">
                                                                                <img src="./assets/img/icon/check-icon-cr.svg" alt="icon">
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="carriculum-item">
                                                            <div class="accordion-header">
                                                                <button class="accordion-button carriculum-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                                                    Introduction of Digital Marketing
                                                                </button>
                                                                <p class="mb-0">(03 Lectures)</p>
                                                            </div>
                                                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#carriculumExp">
                                                                <div class="accordion-body">
                                                                    <div class="meta-progress">
                                                                        <div class="p-header d-flex justify-content-between">
                                                                            <p>1/3 Completed</p>
                                                                            <p>65%</p>
                                                                        </div>
                                                                        <div class="progress-section">
                                                                            <div class="progress">
                                                                                <div class="progress-bar" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="67" style="max-width: 67%">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <a class="course-set d-flex justify-content-between" href="#">
                                                                        <div class="course-into d-flex align-items-center">
                                                                            <div class="icon">
                                                                                <i class="ri-play-fill cr-video-btn"></i>
                                                                            </div>
                                                                            <span>Introduction</span>
                                                                        </div>
                                                                        <div class="course-time d-flex align-items-center">
                                                                            <span>3m 25s</span>
                                                                            <div class="icon">
                                                                                <img src="./assets/img/icon/lock-icon.svg" alt="icon">
                                                                            </div>
                                                                        </div>
                                                                    </a>

                                                                    <a class="course-set d-flex justify-content-between" href="#">
                                                                        <div class="course-into d-flex align-items-center">
                                                                            <div class="icon">
                                                                                <i class="ri-play-fill cr-video-btn"></i>
                                                                            </div>
                                                                            <span>Type of Digital Marketing</span>
                                                                        </div>
                                                                        <div class="course-time d-flex align-items-center">
                                                                            <span>3m 25s</span>
                                                                            <div class="icon">
                                                                                <img src="./assets/img/icon/lock-icon.svg" alt="icon">
                                                                            </div>
                                                                        </div>
                                                                    </a>

                                                                    <a class="course-set d-flex justify-content-between" href="#">
                                                                        <div class="course-into d-flex align-items-center">
                                                                            <div class="icon">
                                                                                <i class="ri-play-fill cr-video-btn"></i>
                                                                            </div>
                                                                            <span>It’s Not an income Problem. it’s a Thinking Problem</span>
                                                                        </div>
                                                                        <div class="course-time d-flex align-items-center">
                                                                            <span>Preview</span>
                                                                            <div class="icon">
                                                                                <img src="./assets/img/icon/check-icon-cr.svg" alt="icon">
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="carriculum-item">
                                                            <div class="accordion-header">
                                                                <button class="accordion-button carriculum-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                                                    What is Search Engine Optimization (SEQ)
                                                                </button>
                                                                <p class="mb-0">(03 Lectures)</p>
                                                            </div>
                                                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#carriculumExp">
                                                                <div class="accordion-body">
                                                                    <div class="meta-progress">
                                                                        <div class="p-header d-flex justify-content-between">
                                                                            <p>1/3 Completed</p>
                                                                            <p>65%</p>
                                                                        </div>
                                                                        <div class="progress-section">
                                                                            <div class="progress">
                                                                                <div class="progress-bar" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="67" style="max-width: 67%">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <a class="course-set d-flex justify-content-between" href="#">
                                                                        <div class="course-into d-flex align-items-center">
                                                                            <div class="icon">
                                                                                <i class="ri-play-fill cr-video-btn"></i>
                                                                            </div>
                                                                            <span>Introduction</span>
                                                                        </div>
                                                                        <div class="course-time d-flex align-items-center">
                                                                            <span>3m 25s</span>
                                                                            <div class="icon">
                                                                                <img src="./assets/img/icon/lock-icon.svg" alt="icon">
                                                                            </div>
                                                                        </div>
                                                                    </a>

                                                                    <a class="course-set d-flex justify-content-between" href="#">
                                                                        <div class="course-into d-flex align-items-center">
                                                                            <div class="icon">
                                                                                <i class="ri-play-fill cr-video-btn"></i>
                                                                            </div>
                                                                            <span>Type of Digital Marketing</span>
                                                                        </div>
                                                                        <div class="course-time d-flex align-items-center">
                                                                            <span>3m 25s</span>
                                                                            <div class="icon">
                                                                                <img src="./assets/img/icon/lock-icon.svg" alt="icon">
                                                                            </div>
                                                                        </div>
                                                                    </a>

                                                                    <a class="course-set d-flex justify-content-between" href="#">
                                                                        <div class="course-into d-flex align-items-center">
                                                                            <div class="icon">
                                                                                <i class="ri-play-fill cr-video-btn"></i>
                                                                            </div>
                                                                            <span>It’s Not an income Problem. it’s a Thinking Problem</span>
                                                                        </div>
                                                                        <div class="course-time d-flex align-items-center">
                                                                            <span>Preview</span>
                                                                            <div class="icon">
                                                                                <img src="./assets/img/icon/check-icon-cr.svg" alt="icon">
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Instructor Tab -->
                                    <div class="tab-pane fade" id="course-inst" role="tabpanel">
                                        <div class="lesseon-review-section">
                                            <div class="student-reating mb-30">
                                                <div class="row align-items-center">
                                                    <div class="col-lg-4 col-md-6">
                                                        <div class="lession-total-review">
                                                            <h3>5.0</h3>
                                                            <ul class="rating-stars list-unstyle">
                                                                <li><i class="ri-star-fill"></i></li>
                                                                <li><i class="ri-star-fill"></i></li>
                                                                <li><i class="ri-star-fill"></i></li>
                                                                <li><i class="ri-star-fill disstar"></i></li>
                                                                <li><i class="ri-star-fill disstar"></i></li>
                                                            </ul>
                                                            <p class="mb-0">(2 Rating)</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-8 col-md-6">
                                                        <div class="lession-review-items mb-10 d-flex align-items-center">
                                                            <div class="ratings-text">
                                                                <span>5.0</span>
                                                            </div>
                                                            <div class="progress-section">
                                                                <div class="progress">
                                                                    <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="max-width: 100%">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="progress-title">
                                                                <ul class="rating-stars list-unstyle">
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="lession-review-items mb-10 d-flex align-items-center">
                                                            <div class="ratings-text">
                                                                <span>0.4</span>
                                                            </div>
                                                            <div class="progress-section">
                                                                <div class="progress">
                                                                    <div class="progress-bar psc02" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="95" style="max-width: 95%">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="progress-title">
                                                                <ul class="rating-stars list-unstyle">
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                    <li><i class="ri-star-line"></i></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="lession-review-items mb-10 d-flex align-items-center">
                                                            <div class="ratings-text">
                                                                <span>0.3</span>
                                                            </div>
                                                            <div class="progress-section">
                                                                <div class="progress">
                                                                    <div class="progress-bar psc02" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="30" style="max-width: 30%">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="progress-title">
                                                                <ul class="rating-stars list-unstyle">
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                    <li><i class="ri-star-line"></i></li>
                                                                    <li><i class="ri-star-line"></i></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="lession-review-items mb-10 d-flex align-items-center">
                                                            <div class="ratings-text">
                                                                <span>0.2</span>
                                                            </div>
                                                            <div class="progress-section">
                                                                <div class="progress">
                                                                    <div class="progress-bar psc02" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="10" style="max-width: 10%">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="progress-title">
                                                                <ul class="rating-stars list-unstyle">
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                    <li><i class="ri-star-line"></i></li>
                                                                    <li><i class="ri-star-line"></i></li>
                                                                    <li><i class="ri-star-line"></i></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="lession-review-items d-flex align-items-center">
                                                            <div class="ratings-text">
                                                                <span>0.1</span>
                                                            </div>
                                                            <div class="progress-section">
                                                                <div class="progress">
                                                                    <div class="progress-bar psc02" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0" style="max-width: 0%">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="progress-title">
                                                                <ul class="rating-stars list-unstyle">
                                                                    <li><i class="ri-star-line"></i></li>
                                                                    <li><i class="ri-star-line"></i></li>
                                                                    <li><i class="ri-star-line"></i></li>
                                                                    <li><i class="ri-star-line"></i></li>
                                                                    <li><i class="ri-star-line"></i></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="student-review-section">
                                                <div class="comments-area">
                                                    <h3 class="comments-title">Recent Review</h3>

                                                    <ol class="comment-list">
                                                        <li class="comment">
                                                            <div class="comment-slide">
                                                                <article class="comment-body">
                                                                    <footer class="comment-meta">
                                                                        <div class="comment-author vcard">
                                                                            <img src="./assets/img/all-img/user-cmt.png" class="avatar" alt="image">
                                                                            <h4 class="fn">Esther Howard</h4>

                                                                            <div class="reply">
                                                                                <ul class="rating-stars list-unstyle">
                                                                                    <li><i class="ri-star-fill"></i></li>
                                                                                    <li><i class="ri-star-fill"></i></li>
                                                                                    <li><i class="ri-star-fill"></i></li>
                                                                                    <li><i class="ri-star-fill disstar"></i></li>
                                                                                    <li><i class="ri-star-fill disstar"></i></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div class="comment-metadata">
                                                                            <span>December 25.2023</span>
                                                                        </div>
                                                                    </footer>
                                                                    <div class="comment-content">
                                                                        <p>In the consultancy landscape, every minute invested in refining our expertise, understanding client needs, and innovating solutions contributes.</p>
                                                                        <div class="reply">
                                                                            <ul class="rating-stars list-unstyle">
                                                                                <li><i class="ri-star-fill"></i></li>
                                                                                <li><i class="ri-star-fill"></i></li>
                                                                                <li><i class="ri-star-fill"></i></li>
                                                                                <li><i class="ri-star-fill disstar"></i></li>
                                                                                <li><i class="ri-star-fill disstar"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </div>

                                                            <ol class="children">
                                                                <li class="comment">
                                                                    <div class="comment-slide">
                                                                        <article class="comment-body">
                                                                            <footer class="comment-meta">
                                                                                <div class="comment-author vcard">
                                                                                    <img src="./assets/img/all-img/user-cmt.png" class="avatar" alt="image">
                                                                                    <h4 class="fn">Jenny Wilson</h4>
                                                                                    <div class="reply">
                                                                                        <ul class="rating-stars list-unstyle">
                                                                                            <li><i class="ri-star-fill"></i></li>
                                                                                            <li><i class="ri-star-fill"></i></li>
                                                                                            <li><i class="ri-star-fill"></i></li>
                                                                                            <li><i class="ri-star-fill disstar"></i></li>
                                                                                            <li><i class="ri-star-fill disstar"></i></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>

                                                                                <div class="comment-metadata">
                                                                                    <span>December 25.2023</span>
                                                                                </div>
                                                                            </footer>
                                                                            <div class="comment-content">
                                                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                                                                <div class="reply">
                                                                                    <ul class="rating-stars list-unstyle">
                                                                                        <li><i class="ri-star-fill"></i></li>
                                                                                        <li><i class="ri-star-fill"></i></li>
                                                                                        <li><i class="ri-star-fill"></i></li>
                                                                                        <li><i class="ri-star-fill disstar"></i></li>
                                                                                        <li><i class="ri-star-fill disstar"></i></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </article>
                                                                    </div>
                                                                </li>
                                                            </ol>
                                                        </li>

                                                        <li class="comment">
                                                            <div class="comment-slide">
                                                                <article class="comment-body">
                                                                    <footer class="comment-meta">
                                                                        <div class="comment-author vcard">
                                                                            <img src="./assets/img/all-img/user-cmt.png" class="avatar" alt="image">
                                                                            <h4 class="fn">Esther Howard</h4>

                                                                            <div class="reply">
                                                                                <ul class="rating-stars list-unstyle">
                                                                                    <li><i class="ri-star-fill"></i></li>
                                                                                    <li><i class="ri-star-fill"></i></li>
                                                                                    <li><i class="ri-star-fill"></i></li>
                                                                                    <li><i class="ri-star-fill disstar"></i></li>
                                                                                    <li><i class="ri-star-fill disstar"></i></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div class="comment-metadata">
                                                                            <span>December 25.2023</span>
                                                                        </div>
                                                                    </footer>
                                                                    <div class="comment-content">
                                                                        <p>In the consultancy landscape, every minute invested in refining our expertise, understanding client needs, and innovating solutions contributes.</p>
                                                                        <div class="reply">
                                                                            <ul class="rating-stars list-unstyle">
                                                                                <li><i class="ri-star-fill"></i></li>
                                                                                <li><i class="ri-star-fill"></i></li>
                                                                                <li><i class="ri-star-fill"></i></li>
                                                                                <li><i class="ri-star-fill disstar"></i></li>
                                                                                <li><i class="ri-star-fill disstar"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </div>
                                                        </li>
                                                    </ol>

                                                    <div class="comment-respond">
                                                        <h3 class="comment-reply-title">Leave a Reply</h3>

                                                        <ul class="list-unstyle ps-0 mb-0 icon">
                                                            <li class="d-inline-block"><i class="ri-star-fill"></i></li>
                                                            <li class="d-inline-block"><i class="ri-star-fill"></i></li>
                                                            <li class="d-inline-block"><i class="ri-star-fill"></i></li>
                                                            <li class="d-inline-block"><i class="ri-star-fill"></i></li>
                                                            <li class="d-inline-block"><i class="ri-star-fill"></i></li>
                                                        </ul>

                                                        <form class="comment-form">

                                                            <p class="comment-form-title">
                                                                <input type="text" id="title" placeholder="Review tittle" name="title">
                                                            </p>

                                                            <p class="comment-form-comment mb-30">
                                                                <textarea name="comment" id="comment" cols="45" placeholder="Review content" rows="5" maxlength="65525" required="required"></textarea>
                                                            </p>

                                                            <p class="form-submit">
                                                                <input type="submit" class="submit btn style-one" value="Submit Review">
                                                            </p>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Reviews Tab -->
                                    <div class="tab-pane fade" id="course-reviews" role="tabpanel">
                                        <div class="instructor-sidebar">
                                            <div class="row g-0">
                                                <div class="col-lg-4 col-md-4">
                                                    <div class="image">
                                                        <img src="./assets/img/all-img/instractor.png" alt="image">
                                                    </div>
                                                </div>
                                                <div class="col-lg-8 col-md-8">
                                                    <div class="content">
                                                        <div class="instructor-content mb-15">
                                                            <h3 class="fs-16">{{ formation.professor_name.toUpperCase() }}</h3>
                                                            <div class="meta-info d-flex justify-content-between align-items-center">
                                                                <p class="mb-0 fs-15">Professor of {{  formation.professor.expertise  }}</p>
                                                                <ul class="list-unstyle d-flex">
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                    <li><i class="ri-star-fill"></i></li>
                                                                    <li><i class="ri-star-half-line"></i></li>
                                                                    <li><span>(4.9)</span></li>
                                                                </ul>
                                                            </div>

                                                            <div class="instructor-info">
                                                                <ul class="list-unstyle d-flex">
                                                                    <li><span><img src="./assets/img/icon/play-icon.svg" alt="icon"></span> ({{ CountOfFormations }}) Course</li>
                                                                    <li><span><img src="./assets/img/icon/read-icon.svg" alt="icon"></span> Category</li>
                                                                    <li><span><img src="./assets/img/icon/text-icon.svg" alt="icon"></span> 23,987 Reviews</li>
                                                                </ul>
                                                                <p>Sir's wealth of experience serves as a guiding light, illuminating the path for countless individuals His seasoned expertise not only imparts knowledge but fosters a nurturing environment
                                                                    where</p>
                                                                <p>wisdom meets encouragement, creating an invaluable learning journey for all fortunate enough to be under his mentorship.</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
        <div class="single-course-sidebar">
            <div class="course-widget">
                <div class="course-video">
                    <a href="https://www.youtube.com/watch?v=PWvPbGWVRrU" class="popup-youtube play-now">
                        <i class="ri-play-fill cr-video-btn"></i>
                        <span class="ripple"></span>
                    </a>
                </div>
                <div class="sidebar-content">
                    <div class="meta-info d-flex align-items-center justify-content-between mb-20">
                        <h3>{{ formation.price }}</h3>
                        <div class="share">
                            <img src="./assets/img/icon/share-icon.svg" alt="icon">
                        </div>
                    </div>
                    <h4 class="fs-20 mb-20">This Course Includes:</h4>
                    <ul class="courses-details">
                        <li>
                            <div class="icon"><img src="./assets/img/icon/menu-icon.svg" alt="icon"> Centre</div>
                            <p>{{ formation.centre.name }}</p>
                        </li>
                        <li>
                            <div class="icon"><img src="./assets/img/icon/lavel-icon.svg" alt="icon"> Salle </div>
                            <p>{{ formation.salle.id }}</p>
                        </li>
                        <li>
                            <div class="icon"><img src="./assets/img/icon/heat-icon.svg" alt="icon">Capacité</div>
                            <p>30</p>
                        </li>
                        <li>
                            <div class="icon"><img src="./assets/img/icon/skill-icon.svg" alt="icon"> Skill Level</div>
                            <p>Beginner</p>
                        </li>
                        <li>
                            <div class="icon"><img src="./assets/img/icon/global-icon-sm.svg" alt="icon"> Language</div>
                            <p>English</p>
                        </li>
                    </ul>
                    <form v-if="authStore.user" @submit.prevent="submitForm">
                        <input type="text" class="input" v-model="form.payment_proof" placeholder="Payment Proof">
                        <input type="text" class="input"  v-model="form.justification" placeholder="Justification">
                        <button type="submit" class="btn style-one w-100 box-shadow-1">Buy This Course</button>
                    </form>
                    <router-link v-else to="/login" class="btn style-one w-100 box-shadow-1">Login For Buy This Course</router-link>                    
                    <!-- Success Modal -->
                    <div class="modal" tabindex="-1" role="dialog" :class="{ 'show': successModal, 'd-block': successModal }">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <p>You have successfully purchased the course.</p><button type="button" class="btn style-one box-shadow-1 buy" @click="successModal = false">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                </div>
                <div class="related-course pt-70">
                    <div class="course-section-title mb-30 text-center">
                        <h3 class="fs-20 mb-20">Related Course</h3>
                        <p class="fs-15">Discover Your Perfect Program In Our Courses</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-sm-6">
                            <div class="single-courses-box mb-25 box-shadow-2">
                                <div class="image mb-20 position-relative">
                                    <a href="course-details.html" class="d-block">
                                            <img src="./assets/img/all-img/course-1.png" alt="image">
                                        </a>
                                    <div class="cr-option">
                                        <a href="author.html"><i class="ri-heart-fill"></i></a>
                                        <a href="author.html"><i class="ri-shopping-basket-fill"></i></a>
                                    </div>
                                    <div class="cr-tag">
                                        <a href="course-details.html">Engineering</a>
                                    </div>
                                </div>
                                <div class="content">
                                    <div class="meta-info mb-20 d-flex align-items-center justify-content-between">
                                        <div class="author d-flex align-items-center">
                                            <img src="./assets/img/all-img/user-1.png" alt="image">
                                            <span>Eleanor Pena</span>
                                        </div>
                                        <div class="cr-price">
                                            <h5 class="fs-16"><span class="price">$100/</span> <span class="old-price">$400</span></h5>
                                        </div>
                                    </div>
                                    <h3 class="mb-15 fs-20"><a href="blog-details.html">Full web Designing Course with 42 web Template.</a></h3>
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
                                    <li class="mr-15"><i class="ri-vidicon-fill"></i> <span>(45) lesson</span> </li>
                                    <li><i class="ri-time-line"></i> <span>10 Week</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="single-courses-box mb-25 box-shadow-2">
                                <div class="image mb-20 position-relative">
                                    <a href="course-details.html" class="d-block">
                                            <img src="./assets/img/all-img/course-3.png" alt="image">
                                        </a>
                                    <div class="cr-option">
                                        <a href="author.html"><i class="ri-heart-fill"></i></a>
                                        <a href="author.html"><i class="ri-shopping-basket-fill"></i></a>
                                    </div>
                                    <div class="cr-tag">
                                        <a href="course-details.html">Engineering</a>
                                    </div>
                                </div>
                                <div class="content">
                                    <div class="meta-info mb-20 d-flex align-items-center justify-content-between">
                                        <div class="author d-flex align-items-center">
                                            <img src="./assets/img/all-img/user-3.png" alt="image">
                                            <span>Jacob Jones</span>
                                        </div>
                                        <div class="cr-price">
                                            <h5 class="fs-16"><span class="price">$100/</span> <span class="old-price">$400</span></h5>
                                        </div>
                                    </div>
                                    <h3 class="mb-15 fs-20"><a href="blog-details.html">Full web Designing Course with 42 web Template.</a></h3>
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
                                    <li class="mr-15"><i class="ri-vidicon-fill"></i> <span>(45) lesson</span> </li>
                                    <li><i class="ri-time-line"></i> <span>10 Week</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="single-courses-box mb-25 box-shadow-2">
                                <div class="image mb-20 position-relative">
                                    <a href="course-details.html" class="d-block">
                                            <img src="./assets/img/all-img/course-4.png" alt="image">
                                        </a>
                                    <div class="cr-option">
                                        <a href="author.html"><i class="ri-heart-fill"></i></a>
                                        <a href="author.html"><i class="ri-shopping-basket-fill"></i></a>
                                    </div>
                                    <div class="cr-tag">
                                        <a href="course-details.html">Engineering</a>
                                    </div>
                                </div>
                                <div class="content">
                                    <div class="meta-info mb-20 d-flex align-items-center justify-content-between">
                                        <div class="author d-flex align-items-center">
                                            <img src="./assets/img/all-img/user-4.png" alt="image">
                                            <span>Esther Howard</span>
                                        </div>
                                        <div class="cr-price">
                                            <h5 class="fs-16"><span class="price">$100/</span> <span class="old-price">$400</span></h5>
                                        </div>
                                    </div>
                                    <h3 class="mb-15 fs-20"><a href="blog-details.html">Full web Designing Course with 42 web Template.</a></h3>
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
                                    <li class="mr-15"><i class="ri-vidicon-fill"></i> <span>(45) lesson</span> </li>
                                    <li><i class="ri-time-line"></i> <span>10 Week</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.buy {
    margin: 0 auto;
}
.modal-body {
    text-align: center;
}

.input{
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #573bff;
    margin-bottom: 10px;
}
</style>