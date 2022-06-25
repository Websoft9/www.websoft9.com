<template>
  <!-- intro-section -->

  <section id="intro-wrap" class="intro-six-Wrap  text-left text-white">
    <b-container>
      <b-row>
        <b-col md="6" class="intro-six-LeftSection pb-5  mb-lg-5">
          <h1
            class="introTitle font-weight-bold text-white text-42 mb-3 t-shadow"
          >
            Build Relationships That infulence Your Business
          </h1>
          <p class="introDescription text-20 mb-4">
            Meet Dexam Highly customizable Pure Vue JS + Bootstrap 4 Landing
            Page.
          </p>
          <div class=" mb-5 lead">
            <ul class="list-inline">
              <li class=" mb-3 ">
                <i class="eva eva-checkmark-outline mr-2 text-warning"></i
                >Minimal, Intuitive and Fully Responsive Design
              </li>

              <li class="mb-3">
                <i class="eva eva-checkmark-outline mr-2 text-warning"></i>
                Super Flexible And Customizable
              </li>
            </ul>
          </div>
          <div class="intro-six-Buttons">
            <a
              name=""
              id=""
              routerLink="/sessions/signin"
              class="btn half-button btn-outline-white btn-lg pl-5 pr-5 pb-2  mr-2 mb-4 text-uppercase"
              href="#"
              role="button"
            >
              Sign in
            </a>
            <a
              id=""
              routerLink="/sessions/signup"
              class="btn half-button btn-warning btn-lg pl-5 pr-5 pb-2 mb-4 text-uppercase"
              href="#"
              role="button"
            >
              Sign up
            </a>
          </div>
        </b-col>
        <b-col md="6" class="intro-six-RightSection d-flex align-items-center">
          <div class="intro-six-ProductImage">
            <img
              src="@/assets/images/landing/svg/v6-header.svg"
              class="img-responsive"
              alt="img-intro"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="overlay"></div>
  </section>

  <!-- end::intro-section -->
</template>
