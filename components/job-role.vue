<template>
  <section class="job-role">
    <div class="card">
      <div class="job-title">{{job.title}}
        <br /><a :href="job.url" :onclick="job.ga">{{job.company}}</a>
      </div>
      <div class="job-description">
        {{job.description}}

        <a v-if="job.LoSlink" class="LoS-link" onclick="ga('send','event','External Link','Click','Huffington Post Article');"
        href="http://www.huffingtonpost.co.uk/nick-platt/how-should-i-vote-in-the-eu-referendum_b_10242366.html">
          Read about it here!
        </a>
      </div>
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
  padding: 0 10px;
}

.card {
  background-color: $blue-contrast;
  color: $white;
  border-radius: 5px;
  padding: 10px 10px;

  a {
    color: #BFA694;
    font-size: 16px;
  }
}

.job-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  padding-bottom: 10px;
  color: #d97b59;
}

.job-description {
  font-family: 'Railway', sans-serif;
  font-size: 15px;
  line-height: 1.19;

  .LoS-link {
    font-size: 14px;
    color: $white;
  }
}

</style>

