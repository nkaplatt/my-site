<template>
  <section class="job-role">
    <div class="card">
      <div class="job-title">{{job.title}} - <a :href="job.url" :onclick="job.ga">{{job.company}}</a></div>
      <div class="job-description">{{job.description}}</div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    job: Object
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/variables.scss';

.job-role {
  width: 100%;
  margin: 5px 0;
}

.card {
  background-color: $blue-contrast;
  // color: $header-background;
  color: $white;
  border-radius: 5px;
  padding: 10px 10px;

  a {
    color: $white;
  }
}

.job-title {
  font-size: 18px;
  padding-bottom: 10px;
}

.job-description {
  font-size: 15px;
  line-height: 1.19;
}

</style>

