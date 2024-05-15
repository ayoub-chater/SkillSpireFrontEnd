<script setup>

</script>

<template>
    <div class="subscribe-area position-relative z-1">
        <div class="container">
            <div class="main-max-width">
                <div class="subscribe-info">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="content">
                                <h3 class="fs-20 mb-20">Sign up to get The Latest Updates</h3>
                                <p>Our approach to it is unique around how to work and how to get hands-on with you like</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <form class="subscribe-from d-flex align-items-center">
                                <input class="from-control" type="email" placeholder="type your email address" required="">
                                <button class="btn style-one" type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.subscribe-area::before {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: -1;
    content: '';
    position: absolute;
    background-color: #012935;
}

.subscribe-info {
    padding: 50px;
    border-radius: 20px;
    background: var(--whiteColor);
    box-shadow: 0px -4px 0 0px var(--primaryColor);
}

.subscribe-area .content {
    padding-right: 100px;
}

.subscribe-area .content p {
    margin-bottom: 0;
}

.subscribe-area .subscribe-from {
    position: relative;
}

.subscribe-area .subscribe-from .from-control {
    padding: 25px 30px;
    border-radius: 45px;
    width: 100%;
    border: 1px solid #dfdfdf;
}

.subscribe-area .subscribe-from button {
    position: absolute;
    right: 20px;
}
</style>