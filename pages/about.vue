<template>
  <section class="container">
    <Header />
    <div class="hero">
      <img class="image-me" alt="Nick Platt" src="~/assets/images/nick-mobile-min.jpg"/>
      <div class="about-me-title">
        A bit <br/> about me
      </div>
    </div>
    <div class="about-content">
      <div class="about-me">
        Currently finishing my final year at Exeter University having completed a year long placement.
        I am a full stack developer with experience in server side languages Python, Nodejs and Golang.
        Front end experience includes React, Redux and Vuejs.
        I've taken keen interest in DevOps methods and have experience automating workflows including automated testing strategies,
        Jenkins and AWS.
      </div>
      <div class="about-title">
        Things I've done
      </div>
      <JobRole v-for="job in jobs" v-bind:key="job.title" :job="job"/>
    </div>
  </section>
</template>

<script>
import Header from '~/components/header.vue';
import JobRole from '~/components/job-role.vue';

export default {
  components: {
    Header,
    JobRole
  },
  data: () => {
    return {
      jobs: [{
        title: 'Software Developer',
        company: 'AND Digital',
        url: 'https://and.digital',
        description:
          'Worked on a variety of projects for multiple house hold name clients, roles ranged from \
          creating and maintaining automated testing environments, front end web app building in addition \
          too smaller projects involving natural language processing and AI bots in python.',
        ga: "ga('send','event','External Link','Click','AND');"
      }, {
        title: 'Co-creator: Team Lead & Full Stack Developer',
        company: 'LeaveorStay',
        url: 'https://twitter.com/leaveorstayhq',
        description:
          'Leading a team of 5 we created a web application and wider platform to help members of the public \
          gather (unbias) information and validate facts regarding the UK\'s EU referendum, helping them come to \
          a conclusion of which way they wanted to vote.',
        ga: "ga('send','event','External Link','Click','LoS');"
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.container {
  min-height: 100vh;
  // background-color: rgb(253, 213, 167);
  background-color: $white;
  margin-top: 55px; 
}

.hero {
  background-image: url('~/assets/images/temp-background-min.jpg');
  background-position: center;
  background-size: cover;
  height: 175px;
  min-width: 100%;
}

.image-me {
  width: 150px;
  margin: 60px 0 0 20px;
}

.about-me-title {
  color: $white;
  font-size: 34px;
  float: right;
  text-align: center;
  margin: 60px 40px 0 0;
  text-shadow:
    -1px -1px 0 $black,
    1px -1px 0 $black,
    -1px 1px 0 $black,
    1px 1px 0 $black;

  @media screen and (max-width: 360px) { // small mobile devices
    font-size: 26px;
    margin: 75px 25px 0 0;
  }
}

.about-content {
  display: flex;
  margin: 20px 10px 50px;
  align-items: center;
  flex-direction: column;

  @media #{$desktop-view} {
    flex-direction: row;
  }
}

.about-title {
  width: 100%;
  font-size: 28px;
}

.about-me {
  color: $header-background;
  padding: 0px 10px;
  text-align: center;
}

</style>

