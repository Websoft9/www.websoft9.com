<template>
  <EnglishLayout>
    <Job></Job>
    <Office></Office>
  </EnglishLayout>
</template>

<script>
import EnglishLayout from '~/layouts/English.vue'
import Position from '~/components/en/Position.vue'
import Job from '~/components/en/Job.vue'
import Office from '~/components/en/Office.vue'

export default {

  metaInfo: {
    title: 'Career'
  },

  components: {
    EnglishLayout,
    Position,
    Job,
    Office
  }
}
</script>