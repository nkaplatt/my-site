<template>
  <section class="container">
    <Header/>
    <div>
      <h1 class="title">
        Nick Platt
      </h1>
      <h2 class="subtitle">
        Software Developer
      </h2>
      <div class="links">
        <a class="icon" href="https://github.com/nkaplatt" onclick="ga('send','event','External Link','Click','GitHub');">
          <img alt="Github icon" src="~/assets/images/github_icon-min.png">
        </a>
        <a class="icon" href="https://www.linkedin.com/in/nick-platt/" onclick="ga('send','event','External Link','Click','LinkedIn');">
          <img alt="LinkedIn icon" src="~/assets/images/linkedin_icon-min.png">
        </a>
        <a class="icon" href="https://twitter.com/nkaplatt" onclick="ga('send','event','External Link','Click','Twitter');">
          <img alt="Twitter icon" src="~/assets/images/twitter_icon-min.png">
        </a>
      </div>
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
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('~/assets/images/temp-background-min.jpg');
  background-position: center;
  background-size: cover;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: $white;
  text-shadow:
    -1px -1px 0 $black,
    1px -1px 0 $black,
    -1px 1px 0 $black,
    1px 1px 0 $black; 
  letter-spacing: 1px;

  @media #{$tablet-view} {
    font-size: 100px;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 24px;
  color: $white;
  text-shadow:
    -1px -1px 0 $black,
    1px -1px 0 $black,
    -1px 1px 0 $black,
    1px 1px 0 $black;
  word-spacing: 5px;
  padding-bottom: 15px;

  @media #{$tablet-view} {
    font-size: 42px;
  }
}

.links {
  @media #{$tablet-view} {
    padding-top: 15px;
  }
}

.icon {
  padding: 5px;

  img {
    width: 35px;
    height: 35px;

    @media #{$tablet-view} {
      width: 50px;
      height: 50px;
    }
  }
}

</style>

