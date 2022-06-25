<template>
  <section id="teams-wrap" class="team-wrap p-t-b-80 light-gray">
    <b-container>
      <b-row>
        <b-col md="12" class="section-header mb-5">
          <h2 class="font-weight-bold">Meet our Team</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea
            quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          md="6"
          lg="3"
          sm="6"
          class="  mb-4 mb-lg-0 "
          v-for="(team, key) in teams"
          :key="key"
        >
          <b-card class="card-profile-1">
            <div class="text-center">
              <div class="avatar box-shadow-2 mb-3">
                <img v-bind:src="team.profile_pic" alt="" />
              </div>
              <h5 class="font-weight-medium card-title m-0">{{ team.name }}</h5>
              <p class="mt-0">{{ team.job }}</p>
              <p>{{ team.desc }}</p>
              <button class="btn half-button btn-gradient">Contact</button>
              <div class="card-socials-simple mt-4">
                <a href="" class="text-20 mr-2">
                  <i class="eva eva-twitter twitter"></i>
                </a>
                <a href="" class="text-20 mr-2">
                  <i class="eva eva-google google"></i>
                </a>
                <a href="" class="text-20 mr-2">
                  <i class="eva eva-facebook facebook"></i>
                </a>
              </div>
            </div>
          </b-card>
        </b-col>
        <!-- end of col -->
        <!-- <div class="col-md-6 col-lg-3 col-sm-6 mb-lg-0  mb-4 ">
                <div class="card card-profile-1">
                    <div class="card-body text-center">
                        <div class="avatar box-shadow-2 mb-3">
                            <img src="@/assets/images/landing/faces/12.jpg" alt="">
                        </div>
                        <h5 class="font-weight-medium card-title m-0">Jassica Pearl</h5>
                        <p class="mt-0">QA Tester</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button class="btn btn-gradient">Contact Jassica</button>
                        <div class="card-socials-simple mt-4">

                            <a href="" class="text-20 mr-2">
                                <i class="eva eva-twitter twitter"></i>
                            </a>
                            <a href="" class="text-20 mr-2">
                                <i class="eva eva-google google"></i>
                            </a>
                            <a href="" class="text-20 mr-2">
                                <i class="eva eva-facebook facebook"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div> -->
        <!-- end of col -->
        <!-- <div class="col-md-6 col-lg-3 col-sm-6  mb-lg-0 mb-md-0 mb-sm-0 mb-4 ">
                <div class="card card-profile-1">
                    <div class="card-body text-center">
                        <div class="avatar box-shadow-2 mb-3">
                            <img src="@/assets/images/landing/faces/16.jpg" alt="">
                        </div>
                        <h5 class="font-weight-medium card-title m-0">Kara Smith</h5>
                        <p class="mt-0">Backend Developer</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button class="btn btn-gradient">Contact Kara</button>
                        <div class="card-socials-simple mt-4">

                            <a href="" class="text-20 mr-2">
                                <i class="eva eva-twitter twitter"></i>
                            </a>
                            <a href="" class="text-20 mr-2">
                                <i class="eva eva-google google"></i>
                            </a>
                            <a href="" class="text-20 mr-2">
                                <i class="eva eva-facebook facebook"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div> -->
        <!-- end of col -->

        <!-- <div class="col-md-6 col-lg-3 col-sm-6 mb-lg-0 mb-md-0 mb-sm-0  ">
                <div class="card card-profile-1">
                    <div class="card-body text-center">
                        <div class="avatar box-shadow-2 mb-3">
                            <img src="@/assets/images/landing/faces/5.jpg" alt="">
                        </div>
                        <h5 class="font-weight-medium card-title m-0">Mike Danvers</h5>
                        <p class="mt-0">Frontend Developer</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button class="btn btn-gradient">Contact Mike</button>
                        <div class="card-socials-simple mt-4">

                            <a href="" class="text-20 mr-2">
                                <i class="eva eva-twitter twitter"></i>
                            </a>
                            <a href="" class="text-20 mr-2">
                                <i class="eva eva-google google"></i>
                            </a>
                            <a href="" class="text-20 mr-2">
                                <i class="eva eva-facebook facebook"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div> -->
        <!-- end of col -->
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      teams: [
        {
          name: "Jassica Pearl",
          job: "UI/UX Designer",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          profile_pic: require("@/assets/images/landing/faces/12.jpg")
        },
        {
          name: "Jhon Doe",
          job: "QA Tester",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          profile_pic: require("@/assets/images/landing/faces/15.jpg")
        },
        {
          name: "Kara Smith",
          job: "Backend Developer",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          profile_pic: require("@/assets/images/landing/faces/16.jpg")
        },
        {
          name: "Mike Danvers",
          job: "Frontend Developer",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          profile_pic: require("@/assets/images/landing/faces/5.jpg")
        }
      ]
    };
  }
};
</script>
