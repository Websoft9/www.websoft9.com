<template>
  <EnglishLayout>
    <Ticket></Ticket>
  </EnglishLayout>
</template>


<script>
import EnglishLayout from '~/layouts/English.vue'
import Ticket from '~/components/en/Ticket.vue'

export default {

  metaInfo: {
    title: '工单',
  },

  components: {
    EnglishLayout,
    Ticket,
  },
}
</script>