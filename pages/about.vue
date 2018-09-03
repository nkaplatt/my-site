<template>
  <section class="container">
    <Header />
    <div class="hero">
      <img class="image-me" alt="Nick Platt" src="~/assets/images/nick-mobile-min.jpg"/>
      <div class="about-me-title">
        A bit <br/> about me
      </div>
    </div>
    <div class="about-me">
      Currently finishing my final year at Exeter University having completed a year long placement.
      I am a full stack developer with experience in server side languages Python, Nodejs and Golang.
      Front end experience includes React, Redux and Vuejs.
      I've taken keen interest in DevOps methods and have experience automating workflows including automated testing strategies and deployments
      with tools such as Jenkins and AWS.
    </div>
    <div class="about-content">
      <div class="about-things">
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
        ga: "ga('send','event','External Link','Click','LoS');",
        LoSlink: true
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.container {
  min-height: 100vh;
  background-color: #e2e2e2;
  margin-top: 55px; 
}

.hero {
  background-image: url('~/assets/images/mobile/background-min-resized.jpg');
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
  font-family: 'Montserrat', sans-serif;
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
    margin: 85px 15px  0 0;
  }
}

.about-me {
  font-family: 'Railway', sans-serif;
  font-size: 15px;
  color: $header-background;
  padding: 20px 10px 10px;
  text-align: center;
}

.about-content {
  display: flex;
  padding: 10px 0px 20px;
  align-items: center;
  flex-direction: column;

  @media #{$desktop-view} {
    flex-direction: row;
  }
}

.about-things {
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  font-size: 28px;
  background-color: #BFA694;
  padding: 10px;
  margin-bottom: 15px;
  color: #3a4660;
}

</style>

