<template>
  <section class="container">
    <Header />
    <div class="hero">
      <img class="image-me" alt="Nick Platt" src="~/assets/images/mobile/nick-min-resized.jpg" srcset="~/assets/images/nick-min.jpg 1079w"/>
      <div class="about-me-title">
        A bit <br/> about me
      </div>
    </div>
    <div class="about-me">
      Hi I’m Nick, Site Reliability Engineer at TransferWise based in London. <br> I work within the Automation & Tooling team and focus on providing our developers with self service tools to get their code into production. Prior to joining TransferWise I did a myriad of tech jobs alongside studying Computer Science at Exeter University mainly focusing on backend web development.
    </div>
    <div class="about-content">
      <div class="about-things">
        Things I've done
      </div>
      <div class="job-wrapper">
        <JobRole v-for="job in jobs" v-bind:key="job.title" :job="job"/>
      </div>
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
        title: 'Site Reliability Engineer',
        company: 'TransferWise',
        url: 'https://transferwise.com/',
        description:
          '',
        ga: "ga('send','event','External Link','Click','TW');",
      }, {
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
  background-image: url('../assets/images/mobile/background-min-resized.jpg');
  background-position: center;
  background-size: cover;
  height: 175px;
  min-width: 100%;

  @media #{$tablet-view} {
    height: 250px;
  }
}

.image-me {
  width: 150px;
  margin: 60px 0 0 20px;

  @media #{$tablet-view} {
    width: 250px;
    margin: 60px 0 0 100px;
  }
}

.about-me-title {
  font-family: 'Montserrat', sans-serif;
  color: $white;
  font-size: 34px;
  float: right;
  text-align: center;
  margin: 60px 20px 0 0;
  text-shadow:
    -1px -1px 0 $black,
    1px -1px 0 $black,
    -1px 1px 0 $black,
    1px 1px 0 $black;

  @media screen and (max-width: 360px) { // small mobile devices
    font-size: 26px;
    margin: 85px 15px 0 0;
  }

  @media #{$tablet-view} {
    font-size: 46px;
    margin: 80px 100px 0 0;
  }

  @media #{$desktop-view} {
    font-size: 46px;
    margin: 80px 20% 0 0;
  }
}

.about-me {
  font-family: 'Railway', sans-serif;
  font-size: 15px;
  color: $header-background;
  padding: 20px 20px 10px;
  text-align: center;

  @media #{$tablet-view} {
    font-size: 18px;
    padding: 40px 40px 10px;
  }
}

.about-content {
  display: flex;
  padding: 10px 0px 20px;
  align-items: center;
  flex-direction: column;

  @media #{$desktop-view} {
    flex-direction: column;
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

.job-wrapper {
  display: flex;
  flex-direction: column;

  @media #{$desktop-view} {
    flex-direction: row;
  }
}

</style>

