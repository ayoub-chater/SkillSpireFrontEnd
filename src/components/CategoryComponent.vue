<template>
  <div class="category-section ptb-100">
      <div class="container">
          <div class="main-max-width">
              <div class="section-title mb-50">
                  <div class="row">
                      <div class="col-lg-7 col-sm-7">
                          <div class="content">
                              <h4 class="sub-title mb-25"># Browse Category</h4>
                              <h2 class="mb-0 fs-35">Top Courses Categories</h2>
                          </div>
                      </div>
                      <div class="col-lg-5 col-sm-5">
                          <div class="section-btn text-end">
                              <a href="courses.html" class="btn style-one box-shadow-1">All Categories <img src="./assets/img/icon/long-arrow.svg" alt="Image"></a>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="row">
                  <div class="col-lg-4 col-sm-6">
                      <div class="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                          <div class="icon">
                              <img src="./assets/img/icon/catg-icon-1.svg" alt="icon">
                          </div>
                          <div class="text">
                              <h4 class="fs-16"><a href="courses-grid.html">Finance & Accounting</a></h4>
                              <p class="m-0 fs-15">15 Courses <img src="./assets/img/icon/long-arrow-2.svg" alt="Image"></p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <div class="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                          <div class="icon">
                              <img src="./assets/img/icon/catg-icon-2.svg" alt="icon">
                          </div>
                          <div class="text">
                              <h4 class="fs-16"><a href="courses-grid.html">Management</a></h4>
                              <p class="m-0 fs-15">30 Courses <img src="./assets/img/icon/long-arrow-2.svg" alt="Image"></p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <div class="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                          <div class="icon">
                              <img src="./assets/img/icon/catg-icon-3.svg" alt="icon">
                          </div>
                          <div class="text">
                              <h4 class="fs-16"><a href="courses-grid.html">Learn Art & Design</a></h4>
                              <p class="m-0 fs-15">30 Courses <img src="./assets/img/icon/long-arrow-2.svg" alt="Image"></p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <div class="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                          <div class="icon">
                              <img src="./assets/img/icon/catg-icon-1.svg" alt="icon">
                          </div>
                          <div class="text">
                              <h4 class="fs-16"><a href="courses-grid.html">Foreign Languages</a></h4>
                              <p class="m-0 fs-15">15 Courses <img src="./assets/img/icon/long-arrow-2.svg" alt="Image"></p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <div class="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                          <div class="icon">
                              <img src="./assets/img/icon/catg-icon-1.svg" alt="icon">
                          </div>
                          <div class="text">
                              <h4 class="fs-16"><a href="courses-grid.html">Marketing & sales</a></h4>
                              <p class="m-0 fs-15">15 Courses <img src="./assets/img/icon/long-arrow-2.svg" alt="Image"></p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <div class="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                          <div class="icon">
                              <img src="./assets/img/icon/catg-icon-1.svg" alt="icon">
                          </div>
                          <div class="text">
                              <h4 class="fs-16"><a href="courses-grid.html">Lifestyle & Fashion</a></h4>
                              <p class="m-0 fs-15">15 Courses <img src="./assets/img/icon/long-arrow-2.svg" alt="Image"></p>
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
  name: 'CategoryComponent'
}
</script>

<style scoped>
.category-section .cetg-card .icon {
    margin-right: 20px;
    height: 70px;
    line-height: 69px;
    width: 70px;
    background: #f7f7f7;
    text-align: center;
    border-radius: 100px;
    transition: var(--transition);
}

.category-section .cetg-card {
    padding: 20px 30px;
    border-radius: 95px;
    transition: var(--transition);
}

.category-section .cetg-card:hover {
    background-color: var(--primaryColor);
}

.category-section .cetg-card .text {
    transition: var(--transition);
}

.category-section .cetg-card .text p {
    transition: var(--transition);
}

.category-section .cetg-card .text p img {
    transition: var(--transition);
}

.category-section .cetg-card:hover .text a {
    color: var(--whiteColor);
}

.category-section .cetg-card:hover .text p {
    color: var(--whiteColor);
}

.category-section .cetg-card:hover .text p img {
    filter: brightness(0) invert(1);
}

.single-category-card {
    padding: 25px 30px;
    border-radius: 5px;
    margin-bottom: 25px;
    transition: var(--transition);
    border: 1px solid rgba(198, 201, 212, 1);
}

.single-category-card .icon {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 100%;
    margin-bottom: 20px;
    display: inline-block;
    transition: var(--transition);
    border: 1px solid rgba(198, 201, 212, 1);
}

.single-category-card .icon img {
    transition: var(--transition);
}

.single-category-card h3 {
    font-size: 20px;
    margin-bottom: 12px;
}

.single-category-card a {
    padding-right: 25px;
    position: relative;
}

.single-category-card a img {
    top: 6px;
    right: 0;
    position: absolute;
}

.single-category-card:hover .icon {
    border-color: var(--secondaryColor);
    background-color: var(--secondaryColor);
}

.single-category-card:hover .icon img {
    filter: brightness(111);
}

.single-category-card a:hover {
    color: var(--mainColor);
}
</style>
