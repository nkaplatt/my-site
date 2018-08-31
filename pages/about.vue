<template>
  <section class="container">
    <Header />
    <div class="hero">
      <img class="image-me" alt="Nick Platt" src="~/assets/images/nick-mobile-min.jpg"/>
      <div class="about-me">
        A bit <br/> about me
      </div>
    </div>
    <div class="about-content">
      current route: {{$route.path}}
    </div>
  </section>
</template>

<script>
import Header from '~/components/header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.container {
  min-height: 100vh;
  display: flex;
  background-color: rgb(253, 213, 167);
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

.about-me {
  color: $white;
  font-size: 34px;
  float: right;
  text-align: center;
  margin: 60px 45px 0 0;
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
  background-color: $white;
  color: $header-background;
}
</style>

