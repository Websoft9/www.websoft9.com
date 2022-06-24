<template>
  <ChineseLayout>
    <Ticket></Ticket>
  </ChineseLayout>
</template>


<script>
import ChineseLayout from '~/layouts/Chinese.vue'
import Ticket from '~/components/cn/Ticket.vue'

export default {

  metaInfo: {
    title: '工单',
  },

  components: {
    ChineseLayout,
    Ticket,
  },
}
</script>