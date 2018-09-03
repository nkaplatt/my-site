<template>
  <section class="header">
    <div class="contact">
      <a class="email" href="mailto:hello@nickplatt.co.uk" onclick="ga('send','event','External Link','Click','Email');"><img class="icon" src="~/assets/svgs/email.svg"/>Contact</a>
    </div>
    <div class="navigation">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about/">About</nuxt-link>
      <nuxt-link to="/blog/">Blog</nuxt-link>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss">
@import '~/assets/scss/variables.scss';

.header {
  font-family: 'Railway', sans-serif;
  position: absolute;
  top: 0;
  min-width: 100%;
  height: 55px;
  background-color: $white;
  display: flex;
  padding: 0px 25px;
  justify-content: space-between;
  align-items: center;
}

.email {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: $header-background;

  .icon {
    padding-right: 5px; 
  }
}

.navigation {
  margin-right: -7px; 
  a {
    color: $header-background;
    text-decoration: none;
    padding-right: 7px;
  }
}
</style>

