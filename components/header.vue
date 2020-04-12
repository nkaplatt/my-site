<template>
  <section class="header">
    <div class="contact">
      <img class="icon" alt="email icon" src="~/assets/svgs/email.svg"/>
      <a class="email" href="mailto:hello@nickplatt.co.uk" onclick="ga('send','event','External Link','Click','Email');">Contact</a>
    </div>
    <div class="navigation">
      <nuxt-link v-if="['about'].includes($route.name)" to="/">Home</nuxt-link>
      <nuxt-link v-if="!['about'].includes($route.name)" to="/about/">About</nuxt-link>
      <nuxt-link v-if="blog" to="/blog/">Blog</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      blog: false
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/variables.scss';

.header {
  font-family: 'Railway', sans-serif;
  position: absolute;
  top: 0;
  min-width: 100%;
  height: 75px;
  background-color: $white;
  display: flex;
  padding: 0px 35px;
  justify-content: space-between;
  align-items: center;

  @media #{$tablet-view} {
    padding: 0px 45px;
    font-size: 22px;
  }

  @media #{$desktop-view} {
    padding: 0px 65px;
  }
}

.email {
  display: flex;
  font-weight: 600;
  font-size: 18px;
  align-items: center;
  text-decoration: none;
  margin-top: 4px;
  color: $header-background;

  .icon {
    padding-right: 5px;
  }
}

.navigation {
  font-size: 18px;
  font-weight: 600;
  margin-top: 4px;

  @media #{$desktop-view} {
    margin-right: -15px; 
  }
  
  a {
    color: $header-background;
    text-decoration: none;

    @media #{$desktop-view} {
      padding-right: 15px;
    }
  }
}

.contact {
  display: flex;
  flex-direction: row;
}
</style>

